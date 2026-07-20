#!/usr/bin/env bash
# Wraps `docker compose`, selecting the right compose files for the
# environment: base file only on a laptop, base + prod override (adds
# Caddy) on a DigitalOcean droplet. Forwards all args, e.g.:
#   launch-docker.sh up -d
#   launch-docker.sh exec -T mediawiki php maintenance/run.php update
#
# Detection: DigitalOcean's metadata service only answers at
# 169.254.169.254 on an actual droplet, so probing it is a reliable,
# dependency-free way to tell laptop and droplet apart.
set -e

REPO_ROOT="$(git -C "$(dirname "$0")" rev-parse --show-toplevel)"
INFRA_DIR="$REPO_ROOT/infra"
FILES=(-f "$INFRA_DIR/docker-compose.yml")

if curl -s --max-time 2 http://169.254.169.254/metadata/v1/id >/dev/null 2>&1; then
  FILES+=(-f "$INFRA_DIR/docker-compose.prod.yml")
fi

exec docker compose "${FILES[@]}" "$@"
