#!/usr/bin/env zsh
set -euo pipefail

REPO_DIR="${APPLYPILOT_REPO_DIR:-/Users/kejunliu/Downloads/project/applypilot}"
CODEX_BIN="${CODEX_BIN:-/Users/kejunliu/.toolbox/bin/codex}"
MAX_LEADS="${APPLYPILOT_MAX_LEADS:-10}"
LOG_DIR="${APPLYPILOT_LOG_DIR:-$REPO_DIR/logs/job-search}"
LOCK_DIR="${TMPDIR:-/tmp}/applypilot-job-search.lock"

export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$HOME/.toolbox/bin"

mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/$(date '+%Y-%m-%d_%H-%M-%S').log"
exec >> "$LOG_FILE" 2>&1

echo "[$(date)] ApplyPilot lead search started"
echo "Repo: $REPO_DIR"
echo "Max leads: $MAX_LEADS"

if ! mkdir "$LOCK_DIR" 2>/dev/null; then
  echo "Another ApplyPilot lead search appears to be running. Exiting."
  exit 0
fi
trap 'rmdir "$LOCK_DIR" 2>/dev/null || true' EXIT

cd "$REPO_DIR"

if [[ ! -x "$CODEX_BIN" ]]; then
  echo "Codex executable not found or not executable: $CODEX_BIN"
  exit 1
fi

if ! git diff --quiet -- dashboard dashboard-ui/src/data/dashboardData.ts; then
  echo "Dashboard data files have uncommitted changes. Commit, stash, or review them before running scheduled search."
  git status --short -- dashboard dashboard-ui/src/data/dashboardData.ts
  exit 1
fi

PROMPT="Use \$applypilot. Run one lead-finding-only job search for my existing ApplyPilot workflow. Use candidate_profile.json, application_rules.md, resume_routing.md, answer_bank.md, and dashboard/*.csv as the source of truth. Find and classify up to ${MAX_LEADS} fresh new-grad or entry-level SWE, AI engineering, ML engineering, LLM, agentic AI, or similar technical roles from public sources. Do not open application flows, do not click Apply, do not create accounts, do not log in, do not submit applications, and do not answer application forms. Respect all skip rules, including sponsorship, F-1 OPT/STEM OPT, salary floor, graduation-window eligibility, citizenship/clearance, excluded companies, excluded industries, Product Manager, C++, and overleveled roles. Update dashboard CSV files and regenerate dashboard-ui/src/data/dashboardData.ts if leads are added. Leave application_log.csv empty unless a real application attempt occurred, which this scheduled run must not do. Stop if blocked by CAPTCHA, Cloudflare, login, paywall, or ambiguous legal/work-authorization wording. Summarize what changed."

"$CODEX_BIN" --search -a never -s workspace-write -C "$REPO_DIR" exec "$PROMPT"

if [[ -d dashboard-ui ]]; then
  npm --prefix dashboard-ui run sync-data
fi

echo "[$(date)] ApplyPilot lead search finished"
git status --short -- dashboard dashboard-ui/src/data/dashboardData.ts
