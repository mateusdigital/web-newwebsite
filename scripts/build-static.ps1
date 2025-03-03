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

##------------------------------------------------------------------------------
# bump-version
node "C:/Users/mateusdigital/Projects/mateusdigital/tool/bump-version/source/main.js" --build;;
npm run export;
