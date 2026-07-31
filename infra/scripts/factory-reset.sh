#!/usr/bin/env bash
# Full reset: wipes the wiki DB *and* uploaded image files, reinstalls
# MediaWiki from scratch, rebuilds the website, and reimports content.
# The one-command "clean slate" -- see lightweight-reload.sh for the
# non-destructive day-2-update alternative.
set -e

# Errors from any step below (including ones from sourced/child scripts,
# since `set -e` propagates) otherwise surface as a bare stack trace with
# no indication of which stage of the reset was running. Track the current
# step and report it on failure so that's obvious at a glance.
CURRENT_STEP="(startup)"
trap 'echo "❌ factory-reset.sh FAILED during: $CURRENT_STEP (command: $BASH_COMMAND, exit: $?)" >&2' ERR
step() { CURRENT_STEP="$1"; echo "==> $1..."; }

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(git -C "$SCRIPT_DIR" rev-parse --show-toplevel)"
INFRA_DIR="$REPO_ROOT/infra"
ADMIN_PASS="${1:-AdminPass123}"
CONTENT_DIR="${2:-}"

export MW_PASSWORD="$ADMIN_PASS"

step "Clearing uploaded image files"
sudo rm -rf "$INFRA_DIR/images"/*

step "Building website"
(cd "$REPO_ROOT" && npm run build:website)

step "Restarting local website preview server"
source "$SCRIPT_DIR/restart-website-preview.sh"

step "Reinstalling MediaWiki from scratch"
bash "$SCRIPT_DIR/fresh-wiki-install.sh" "$ADMIN_PASS"

step "Importing wiki content"
if [ -n "$CONTENT_DIR" ]; then
  bash "$SCRIPT_DIR/import-wiki-content.sh" "$CONTENT_DIR"
else
  bash "$SCRIPT_DIR/import-wiki-content.sh"
fi
