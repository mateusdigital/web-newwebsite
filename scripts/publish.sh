#!/usr/bin/env bash

readonly SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)";
readonly ROOT_DIR="$(dirname "$SCRIPT_DIR")";

readonly OUT_DIR="${ROOT_DIR}/out";
readonly PUBLISH_DIR="${HOME}/github_out";

if [ ! -d "$PUBLISH_DIR" ]; then 
    git clone git@github.com:mateusdigital/mateusdigital.github.io.git "$PUBLISH_DIR";
else 
    cd "$PUBLISH_DIR";
    git pull --force;
    cd "$ROOT_DIR";
fi;

npm run export;
rsync -av --update "$OUT_DIR" "$PUBLISH_DIR";

