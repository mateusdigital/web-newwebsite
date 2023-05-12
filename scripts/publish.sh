#!/usr/bin/env bash

readonly curr_build=$(cat pages/index.js | grep "// build:" | cut -d" " -f3); 
readonly next_build=$((curr_build + 1)); 

cat pages/index.js | sed s/"build: $curr_build"/"build: $next_build"/g \
    > pages/index.js.tmp; 

mv pages/index.js.tmp pages/index.js