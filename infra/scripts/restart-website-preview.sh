# Local-dev-only: (re)start a static preview server for website/dist on port
# 3456. MediaWiki:Common.js points the sidebar logo here when
# location.hostname is localhost (see
# example/wiki-content-files/system/common-js.md) -- on the droplet, Caddy
# serves website/dist directly (docker-compose.prod.yml) so this is skipped.
#
# Expects SCRIPT_DIR and REPO_ROOT to already be set by the sourcing script.
source "$SCRIPT_DIR/do-metadata.sh"
if curl -s --max-time 2 "$DO_METADATA_ID" >/dev/null 2>&1; then
  echo "    (droplet -- Caddy serves the site, skipping local preview)"
else
  PIDFILE="$REPO_ROOT/.website-preview.pid"
  if [ -f "$PIDFILE" ]; then
    kill "$(cat "$PIDFILE")" 2>/dev/null || true
  fi
  nohup npx serve "$REPO_ROOT/website/dist" -p 3456 \
    > /tmp/qwiki-website-preview.log 2>&1 &
  echo $! > "$PIDFILE"
  echo "    Website preview running at http://localhost:3456 (pid $(cat "$PIDFILE"))"
fi
