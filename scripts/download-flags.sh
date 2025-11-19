#!/bin/bash

# Script to download country flag SVGs from flagcdn.com
# Usage: ./scripts/download-flags.sh

FLAGS_DIR="public/flags"
mkdir -p "$FLAGS_DIR"

echo "Downloading flag SVGs..."

# Download flags
curl -o "$FLAGS_DIR/in.svg" "https://flagcdn.com/in.svg"
curl -o "$FLAGS_DIR/sg.svg" "https://flagcdn.com/sg.svg"
curl -o "$FLAGS_DIR/my.svg" "https://flagcdn.com/my.svg"
curl -o "$FLAGS_DIR/ae.svg" "https://flagcdn.com/ae.svg"
curl -o "$FLAGS_DIR/us.svg" "https://flagcdn.com/us.svg"

echo "✅ Flags downloaded to $FLAGS_DIR/"
ls -lh "$FLAGS_DIR"

