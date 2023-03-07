#!/usr/bin/env bash

readonly SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)";
readonly ROOT_DIR="$(dirname $SCRIPT_DIR)";
readonly DEMOS_DIR="${ROOT_DIR}/public/modules/demos";



readonly list=$(cat "${ROOT_DIR}/pages/projects.js" \
                | grep "<GameItem_"                 \
                | sed 's/.*name="\([^"]*\)".*/\1/'  \
                );

echo $list;
for item in $list; do
    git_path="${DEMOS_DIR}/${item}";
    if [ -d  "${git_path}" ]; then
        echo "---> $item is already clonned";
        continue;
    fi;

    git_url="https://github.com/mateus-earth/${item}";
    git clone --recursive "${git_url}" "${git_path}";
done;
