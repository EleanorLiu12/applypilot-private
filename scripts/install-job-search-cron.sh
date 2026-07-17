#!/usr/bin/env zsh
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
SCHEDULE="${1:-0 14 * * 1-5}"
RUNNER="$REPO_DIR/scripts/run-lead-search.sh"
BEGIN_MARKER="# BEGIN ApplyPilot job search cron"
END_MARKER="# END ApplyPilot job search cron"
CRON_LINE="$SCHEDULE /bin/zsh -lc '$RUNNER'"

if [[ ! -x "$RUNNER" ]]; then
  echo "Runner is not executable: $RUNNER"
  echo "Run: chmod +x $RUNNER"
  exit 1
fi

CURRENT_FILE="$(mktemp)"
NEW_FILE="$(mktemp)"
trap 'rm -f "$CURRENT_FILE" "$NEW_FILE"' EXIT

(crontab -l 2>/dev/null || true) | sed "/$BEGIN_MARKER/,/$END_MARKER/d" > "$CURRENT_FILE"
{
  cat "$CURRENT_FILE"
  echo "$BEGIN_MARKER"
  echo "$CRON_LINE"
  echo "$END_MARKER"
} > "$NEW_FILE"

crontab "$NEW_FILE"

echo "Installed ApplyPilot job search cron:"
echo "$CRON_LINE"
echo "Logs: $REPO_DIR/logs/job-search/"
