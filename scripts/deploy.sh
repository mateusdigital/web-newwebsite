#!/usr/bin/env bash

readonly SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)";
readonly ROOT_DIR="$(dirname "$SCRIPT_DIR")";

pushd $ROOT_DIR;

readonly curr_build=$(cat pages/index.js | grep "const build = " | cut -d" " -f4 | tr -d ";"); 
echo "CURR BUILD: $curr_build";

##
##
##

readonly PUBLISH_DIR="mateusdigital.github.io/";
pushd "$PUBLISH_DIR";
    git add .
    git commit -m "$0 - Build: $curr_build";
popd

popd;