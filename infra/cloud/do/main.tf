terraform {
  required_providers {
    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = "~> 2.0"
    }
    http = {
      source  = "hashicorp/http"
      version = "~> 3.0"
    }
  }
}

# Fetches the operator's current public IPv4 at apply time, so a full
# teardown/rebuild automatically picks up whatever IP is current then --
# no need to hand-update ssh_allowed_source_ipv6_cidr's IPv4 counterpart.
# icanhazip.com's ipv4-only subdomain forces IPv4 resolution even on a
# dual-stack connection (matches `curl -4 ifconfig.me` behavior).
data "http" "my_public_ipv4" {
  url = "https://ipv4.icanhazip.com"
}

variable "do_token" {
  description = "DigitalOcean API token"
  type        = string
  sensitive   = true
}

variable "ssh_public_key_path" {
  description = "Path to the public half of the doikayt_do_login keypair (droplet login only -- git clone/pull access is handled separately by github_read_token)"
  type        = string
  default     = "~/.ssh/doikayt_do_login.pub"
}

variable "droplet_region" {
  description = "DigitalOcean region slug"
  type        = string
  default     = "sfo3"
}

variable "droplet_size" {
  description = "DigitalOcean droplet size slug"
  type        = string
  default     = "s-2vcpu-4gb"
}

variable "ssh_allowed_source_ipv6_cidr" {
  description = "Your ISP-assigned IPv6 /64 prefix, allowed to reach port 22 alongside the auto-detected IPv4 (see data.http.my_public_ipv4). Not auto-detected -- update by hand if you change ISPs. Use a /64, not a /128: IPv6 privacy-extension addresses rotate the host portion periodically, but the ISP-assigned network prefix stays stable."
  type        = string
  default     = "2600:1700:3ecb:ae00::/64"
}

variable "github_read_token" {
  description = "Fine-grained GitHub PAT (doikayt-org-read-token) -- read-only Contents access across all doikayt org repos, used for git clone/pull over HTTPS"
  type        = string
  sensitive   = true
}

variable "wiki_admin_password" {
  description = "Initial MediaWiki Admin account password"
  type        = string
  sensitive   = true
}

provider "digitalocean" {
  token = var.do_token
}

resource "digitalocean_ssh_key" "default" {
  name       = "doikayt-wiki-key"
  public_key = file(var.ssh_public_key_path)
}

resource "digitalocean_droplet" "mediawiki" {
  image    = "ubuntu-24-04-x64"
  name     = "doikayt-mediawiki"
  region   = var.droplet_region
  size     = var.droplet_size
  ssh_keys = [digitalocean_ssh_key.default.fingerprint]
  user_data = templatefile("${path.module}/cloud-init.yaml.tpl", {
    github_read_token   = var.github_read_token
    wiki_admin_password = var.wiki_admin_password
  })

  tags = ["doikayt", "mediawiki"]
}

# Static IP that survives destroy/recreate of the droplet -- Porkbun's DNS
# record points here, not at the droplet's own (potentially changing) IP.
resource "digitalocean_reserved_ip" "wiki" {
  region     = var.droplet_region
  droplet_id = digitalocean_droplet.mediawiki.id

  lifecycle {
    prevent_destroy = true
  }
}

resource "digitalocean_firewall" "mediawiki" {
  name        = "doikayt-mediawiki-fw"
  droplet_ids = [digitalocean_droplet.mediawiki.id]

  inbound_rule {
    protocol   = "tcp"
    port_range = "22"
    source_addresses = [
      "${trimspace(data.http.my_public_ipv4.response_body)}/32",
      var.ssh_allowed_source_ipv6_cidr,
    ]
  }

  inbound_rule {
    protocol         = "tcp"
    port_range       = "80"
    source_addresses = ["0.0.0.0/0", "::/0"]
  }

  inbound_rule {
    protocol         = "tcp"
    port_range       = "443"
    source_addresses = ["0.0.0.0/0", "::/0"]
  }

  outbound_rule {
    protocol              = "tcp"
    port_range            = "1-65535"
    destination_addresses = ["0.0.0.0/0", "::/0"]
  }

  outbound_rule {
    protocol              = "udp"
    port_range            = "1-65535"
    destination_addresses = ["0.0.0.0/0", "::/0"]
  }
}

output "droplet_ip" {
  value = digitalocean_droplet.mediawiki.ipv4_address
}

output "reserved_ip" {
  value = digitalocean_reserved_ip.wiki.ip_address
}
