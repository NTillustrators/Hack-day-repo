#!/usr/bin/env bash
# Stamps every stylesheet, script and image link with a fresh ?v= number so
# browsers (Safari especially) download the new files instead of cached ones.
# Run before each commit: ./bump-version.sh
set -euo pipefail
cd "$(dirname "$0")"
v=$(date +%s)
sed -i -E "s#(styles\.css|projects\.js)(\?v=[0-9]+)?\"#\1?v=$v\"#g" ./*.html
sed -i -E "s#(images/[A-Za-z0-9_.-]+\.(svg|jpg|jpeg|png|webp))(\?v=[0-9]+)?([\"'])#\1?v=$v\4#g" styles.css projects.js
echo "Asset version set to $v"
