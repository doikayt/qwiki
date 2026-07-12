#!/usr/bin/env bash
set -e

INFRA_DIR="$(cd "$(dirname "$0")/.." && pwd)"
COMPOSE="docker compose -f $INFRA_DIR/docker-compose.yml"

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
