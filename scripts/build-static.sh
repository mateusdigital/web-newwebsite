#!/usr/bin/env bash
##~---------------------------------------------------------------------------##
##                               *       +                                    ##
##                         '                  |                               ##
##                     ()    .-.,="``"=.    - o -                             ##
##                           '=/_       \     |                               ##
##                        *   |  '=._    |                                    ##
##                             \     `=./`,        '                          ##
##                          .   '=.__.=' `='      *                           ##
##                 +                         +                                ##
##                      O      *        '       .                             ##
##                                                                            ##
##  File      : build.sh                                                      ##
##  Project   : new-website                                                   ##
##  Date      : May 12, 2023                                                  ##
##  License   : GPLv3                                                         ##
##  Author    : mateus.digital <hello@mateus.digital>                         ##
##  Copyright : mateus.digital - 2023                                         ##
##                                                                            ##
##  Description :                                                             ##
##   Builds the static version of the website.                                ##
##   The output should be valid to be deployed.                               ##
##---------------------------------------------------------------------------~##

set -e; ## break on errors.

##------------------------------------------------------------------------------
readonly SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)";
readonly ROOT_DIR="$(dirname "$SCRIPT_DIR")";

pushd $ROOT_DIR; ## Do things based on the ROOT_DIR.


##
## Update the Build Number.
##

##------------------------------------------------------------------------------
readonly curr_build=$(cat pages/index.js | grep "const build = " | cut -d" " -f4 | tr -d ";");
readonly next_build=$((curr_build + 1));
readonly curr_version="$(git describe --abbrev=0 --tags)";

echo "==> CURR BUILD: $curr_build";
echo "==> NEXT BUILD: $next_build";
echo "==> VERSION:    $curr_version";

cat pages/index.js                                                   | \
    sed s/"const version = \".*\""/"const version = \"$curr_version\""/g | \
    sed s/"const build = $curr_build"/"const build = $next_build"/g    \
    > pages/index.js.tmp;

mv pages/index.js.tmp pages/index.js


##
## Generate the static build.
##

##------------------------------------------------------------------------------
npm run export;


##
## Finish up
##

##------------------------------------------------------------------------------
echo "==> $0 done...";


##------------------------------------------------------------------------------
"${ROOT_DIR}"/scripts/generate-index-for-dirs.sh;

popd;