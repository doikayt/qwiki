#!/usr/bin/env bash
set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ADMIN_PASS="${1:-AdminPass123}"
CONTENT_DIR="${2:-}"

export MW_PASSWORD="$ADMIN_PASS"

bash "$SCRIPT_DIR/fresh-install.sh" "$ADMIN_PASS"

if [ -n "$CONTENT_DIR" ]; then
  bash "$SCRIPT_DIR/import-content.sh" "$CONTENT_DIR"
else
  bash "$SCRIPT_DIR/import-content.sh"
fi
