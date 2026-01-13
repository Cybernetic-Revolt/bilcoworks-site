#!/bin/bash

# Setup daily cron job for opportunity ingestion
# Runs at 6 AM daily

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

# Create the cron command
CRON_CMD="0 6 * * * cd $PROJECT_DIR && /usr/bin/npx ts-node --transpile-only scripts/ingest.ts >> /tmp/bilcoworks-ingest.log 2>&1"

# Check if cron job already exists
if crontab -l 2>/dev/null | grep -q "bilcoworks.*ingest"; then
    echo "Cron job already exists"
else
    # Add to crontab
    (crontab -l 2>/dev/null; echo "$CRON_CMD") | crontab -
    echo "Cron job added: runs daily at 6 AM"
fi

echo "Current crontab:"
crontab -l
