#!/usr/bin/env bash
set -e

REPO_ROOT="$(git -C "$(dirname "$0")" rev-parse --show-toplevel)"
INFRA_DIR="$REPO_ROOT/infra"
COMPOSE="bash $INFRA_DIR/scripts/launch-docker.sh"

# 1. Bring containers down
$COMPOSE down

# 2. Show the exact volume name before deleting anything
docker volume ls | grep qwiki || true

# 3. Remove the database volume (matches "name: qwiki" in docker-compose.yml)
docker volume rm qwiki_mediawiki-db

# 4. Clear the images bind mount too (separate from the DB, not wiped by step 3)
sudo rm -rf "$INFRA_DIR/images"/*

# 5. Relaunch fresh
$COMPOSE up -d

# 6. Confirm both containers are healthy
$COMPOSE ps
