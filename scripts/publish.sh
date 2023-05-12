#!/usr/bin/env bash
readonly curr_build=$(cat pages/index.js | grep "const build = " | cut -d" " -f4 | tr -d ";"); 
readonly next_build=$((curr_build + 1)); 
echo "CURR BUILD: $curr_build";
echo "NEXT BUILD: $next_build";


cat pages/index.js | sed s/"const build = $curr_build"/"const build = $next_build"/g \
    > pages/index.js.tmp; 

mv pages/index.js.tmp pages/index.js