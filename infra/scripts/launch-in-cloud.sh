#!/usr/bin/env bash
# First-time droplet bootstrap: installs MediaWiki fresh and deploys content.
# Run once, from within a freshly cloned checkout (e.g. by cloud-init).
# For routine updates to an already-running wiki, use reload.sh instead --
# this script runs fresh-install.sh, which wipes the MediaWiki DB.
set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(git -C "$SCRIPT_DIR" rev-parse --show-toplevel)"

echo "==> Installing npm dependencies..."
(cd "$REPO_ROOT" && npm ci)

PUBLIC_IP=$(curl -s http://169.254.169.254/metadata/v1/interfaces/public/0/ipv4/address)
export WIKI_SERVER_URL="http://${PUBLIC_IP}:8080"

echo "==> Fresh MediaWiki install (server: $WIKI_SERVER_URL)..."
bash "$SCRIPT_DIR/fresh-install.sh" "${WIKI_ADMIN_PASSWORD:-AdminPass123}"

echo "==> Deploying content..."
bash "$SCRIPT_DIR/import-content.sh"

echo ""
echo "Done — $WIKI_SERVER_URL"
