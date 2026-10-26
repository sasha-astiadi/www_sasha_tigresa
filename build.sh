#!/bin/bash
cd "$(dirname "$0")"

# Ensure all shell scripts are executable
chmod +x *.sh


PREFIX="veda"

echo "building for folder: /$PREFIX/"
export NEXT_PUBLIC_BASE_PATH="/$PREFIX"

# mkdir -p "out"

pnpm install
pnpm run build

# local mirror (optional)
# rsync -rav --delete dist/ "${HOME}/hero/var/www/$PREFIX/"

# deploy to veda server
rsync -avz --delete out/ "root@veda.info:/root/hero/www/info/$PREFIX/"
