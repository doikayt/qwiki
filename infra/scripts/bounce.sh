#!/usr/bin/env bash
set -e

INFRA_DIR="$(cd "$(dirname "$0")/.." && pwd)"
COMPOSE="docker compose -f $INFRA_DIR/docker-compose.yml"

$COMPOSE down
$COMPOSE up -d
