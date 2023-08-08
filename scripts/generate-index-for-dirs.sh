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
##  File      : generate-index-for-dirs.sh                                    ##
##  Project   : website                                                       ##
##  Date      : 2023-08-08                                                    ##
##  License   : GPLv3                                                         ##
##  Author    : mateus.digital <hello@mateus.digital>                         ##
##  Copyright : mateus.digital - 2023                                         ##
##                                                                            ##
##  Description :                                                             ##
##    The output from next generates the page.html but when we access via     ##
##    page/ it shows 404 - This script just create an index.html with the     ##
##    dir name of the file and copy its contents.                             ##
##---------------------------------------------------------------------------~##

set -e; ## break on errors


##
##  Directories
##

##------------------------------------------------------------------------------
readonly SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)";
readonly ROOT_DIR="$(dirname "$SCRIPT_DIR")";

readonly SOURCE_FOLDER="${ROOT_DIR}/out";

##------------------------------------------------------------------------------
readonly list="games projects contacts resume about";
for item in $list; do
  mkdir -p "${SOURCE_FOLDER}/$item";
  cp "${SOURCE_FOLDER}/${item}.html" "${SOURCE_FOLDER}/${item}/index.html";
done;
