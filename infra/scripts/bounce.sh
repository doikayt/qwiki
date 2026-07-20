#!/usr/bin/env bash
set -e

REPO_ROOT="$(git -C "$(dirname "$0")" rev-parse --show-toplevel)"
INFRA_DIR="$REPO_ROOT/infra"
COMPOSE="bash $INFRA_DIR/scripts/launch-docker.sh"

$COMPOSE down
$COMPOSE up -d
