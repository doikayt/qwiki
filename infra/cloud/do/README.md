# Doikayt wiki — cloud deployment (DigitalOcean)

Run all Terraform commands from this directory (`infra/cloud/do/`).

This is the DigitalOcean-specific half of the cloud deployment; the
provider-agnostic half (the actual wiki application) lives in `infra/`
one level up and is identical whether it's running on your laptop or a
droplet. If another cloud provider is ever added, it would live as a
sibling directory (`infra/cloud/<provider>/`) reusing that same `infra/`
stack — DigitalOcean is the default and, for now, the only one.

## Architecture

```
Terraform (this directory)
  |
  |-- provisions: droplet, firewall (22/80/443 only), reserved IP
  |-- injects via cloud-init: packages, `dev` user, GitHub deploy key
  v
cloud-init (first boot only)
  |
  |-- installs Docker, Node.js, ufw, swap
  |-- clones git@github.com:doikayt/qwiki.git as `dev`
  |-- adds a `reload` shell alias
  |-- runs infra/scripts/launch-in-cloud.sh once
  v
infra/ (provider-agnostic, same on laptop and droplet)
  |
  |-- docker-compose.yml       -- mediawiki + mariadb (always)
  |-- docker-compose.prod.yml  -- + Caddy (droplet only, auto-detected)
  |-- Caddyfile                -- TLS + reverse proxy for wiki.doikayt.org
  |-- LocalSettings.php        -- $wgServer reads WIKI_SERVER_URL env var
  |-- scripts/launch-docker.sh -- picks the right compose files for the
  |                               environment (probes DO's metadata
  |                               service to tell droplet from laptop)
  |-- scripts/launch-in-cloud.sh -- first-time bootstrap (wipes+installs
  |                                  MediaWiki fresh, then deploys content)
  |-- scripts/reload.sh        -- day-2 updates: git pull + redeploy
  |                                content, never touches the DB
```

Two different mechanisms exist on purpose, so they can't be confused:
**`launch-in-cloud.sh`** installs MediaWiki from scratch (wipes the DB) and
runs once, either by hand or via cloud-init on first boot. **`reload.sh`**
(the `reload` alias) is the routine "I pushed a change, deploy it" path —
it checks the wiki is actually up first and bails if not, then pulls,
reinstalls npm deps, and redeploys content. It never wipes anything.

## Network

- **Firewall** (`main.tf`): only 22 (SSH), 80, and 443 are open to the
  internet. MediaWiki's container still publishes host port 8080 (see
  `infra/docker-compose.yml`), but that's for reaching it directly over
  SSH/localhost during setup and debugging -- the firewall makes it
  unreachable from the public internet regardless of what's published.
- **Reserved IP**: a droplet's own public IP changes if it's ever
  destroyed and recreated (e.g. after a `user_data`/cloud-init change,
  which forces replacement). `digitalocean_reserved_ip.wiki` is a
  separate, stable IP attached to the droplet, protected with
  `lifecycle { prevent_destroy = true }` so `terraform destroy` can't
  drop it by accident. **Point your DNS at the reserved IP, not the
  droplet's own `droplet_ip` output.**
- **DNS**: an A record for `wiki.doikayt.org` -> the reserved IP,
  managed in Porkbun (see "DNS setup" below). DNS records only carry a
  hostname -> IP mapping, never a port.
- **TLS**: Caddy (`infra/docker-compose.prod.yml` + `infra/Caddyfile`)
  terminates HTTPS on 443 and reverse-proxies to the `mediawiki`
  container, requesting a Let's Encrypt certificate automatically the
  first time it sees a real request for `wiki.doikayt.org`. This only
  works once the A record actually resolves to this droplet -- Let's
  Encrypt's HTTP-01 challenge needs to reach port 80 here.

## Prerequisites

- Terraform installed (`terraform -version` to check)
- A DigitalOcean API token (generate at cloud.digitalocean.com/account/api/tokens)
- Your own SSH keypair already on disk, for logging into the droplet as
  `dev` (default expects `~/.ssh/id_rsa.pub` -- distinct from the deploy
  key below)
- A dedicated, read-only **GitHub deploy key** for `doikayt/qwiki` --
  do not reuse your personal key here:
  ```
  ssh-keygen -t ed25519 -f ~/.ssh/doikayt_qwiki_deploy -N ""
  ```
  Add the **public** half under the repo's Settings -> Deploy keys
  (read-only, no write access). The droplet only ever gets the private
  half, scoped to `github.com` alone via its own `~/.ssh/config`.

## First-time setup

1. Copy the example vars file and fill in your token (or use env vars,
   see below):

   ```
   cp terraform.tfvars.example terraform.tfvars
   ```

   `terraform.tfvars` is gitignored by convention -- do not commit it.
   Alternatively, skip the file entirely and export `TF_VAR_<name>` for
   anything without a usable default -- in practice just:

   ```
   export TF_VAR_do_token=<your token>
   export TF_VAR_wiki_admin_password=<pick a real one>
   ```

   (`github_deploy_key_path` already defaults to
   `~/.ssh/doikayt_qwiki_deploy` -- only override it if you generated
   the key somewhere else.)

2. Initialize the provider:

   ```
   terraform init
   ```

3. Review the plan:

   ```
   terraform plan
   ```

4. Apply:

   ```
   terraform apply
   ```

   This creates: an SSH key resource (reusing your local public key),
   the droplet itself (Ubuntu 24.04, size from `terraform.tfvars`), a
   firewall allowing only 22/80/443 inbound, and a reserved IP attached
   to the droplet.

5. Terraform prints `droplet_ip` and `reserved_ip` when done. Cloud-init
   then runs automatically on first boot (usually a few minutes):
   installs Docker/Node, creates the `dev` user, installs the GitHub
   deploy key, clones the repo, and runs
   `infra/scripts/launch-in-cloud.sh` -- which installs MediaWiki fresh
   and deploys the wiki content. SSH in once it's done:

   ```
   ssh dev@<reserved_ip>
   cloud-init status --wait
   ```

   The wiki should now answer at `http://<reserved_ip>:8080` (from
   inside an SSH session/tunnel -- see Network above for why it's not
   reachable that way from outside).

## DNS setup (Porkbun)

Once you have the `reserved_ip` output:

1. Log into Porkbun -> Domain Management -> `doikayt.org` -> DNS Records.
2. Add a record: Type `A`, Host `wiki`, Answer `<reserved_ip>`, default TTL.
3. Confirm propagation: `dig +short wiki.doikayt.org` should print the
   reserved IP.

## Caddy / TLS cutover

Once DNS resolves, redeploy the droplet's containers so Caddy picks up
`infra/docker-compose.prod.yml` (this happens automatically —
`infra/scripts/launch-docker.sh` detects it's running on a droplet via
DigitalOcean's metadata service and adds the override file). Running
`reload` (or manually `bash infra/scripts/launch-docker.sh up -d`) is
enough to bring Caddy up once the compose override has been pulled.
After that, `https://wiki.doikayt.org` should work with no port in the URL.

## Day-to-day updates

After the first bootstrap, pushing a content or code change just means,
on the droplet:

```
reload
```

which runs `infra/scripts/reload.sh`: checks the wiki is up, `git pull`s,
`npm ci`, and redeploys content — never touches the database.

## Tearing down

```
terraform destroy
```

Deletes the droplet and firewall. The reserved IP is protected by
`prevent_destroy` and will **not** be deleted — Terraform will refuse
and you'll need to explicitly remove the `lifecycle` block (or the
resource from state) if you really want to release it. Nothing inside
DigitalOcean Spaces is touched if backups were pushed there separately.
