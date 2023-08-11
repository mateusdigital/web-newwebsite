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
for item in $(find "$SOURCE_FOLDER" -iname "*.html"); do ## ASSUMING NO SPACES
  dir_name="$(dirname "$item")";
  file_name="$(basename "$item")";
  item_name="$(basename "$item" ".html")";

  echo "$dir_name";
  echo "$file_name";
  echo "$item_name";
  echo "";

  mkdir -pv "${dir_name}/${item_name}";
  cp -v "${dir_name}/${file_name}" "${dir_name}/${item_name}/index.html";
done;
