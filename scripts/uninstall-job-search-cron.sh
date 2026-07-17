#!/usr/bin/env zsh
set -euo pipefail

BEGIN_MARKER="# BEGIN ApplyPilot job search cron"
END_MARKER="# END ApplyPilot job search cron"
TMP_FILE="$(mktemp)"
trap 'rm -f "$TMP_FILE"' EXIT

(crontab -l 2>/dev/null || true) | sed "/$BEGIN_MARKER/,/$END_MARKER/d" > "$TMP_FILE"
crontab "$TMP_FILE"

echo "Removed ApplyPilot job search cron entries."
