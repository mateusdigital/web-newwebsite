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
##  File      : deploy.sh                                                     ##
##  Project   : flappy_gb                                                     ##
##  Date      : May 12, 2023                                                  ##
##  License   : GPLv3                                                         ##
##  Author    : mateus.digital <hello@mateus.digital>                         ##
##  Copyright : mateus.digital - 2023                                         ##
##                                                                            ##
##  Description :                                                             ##
##   Deploys the output of scripts/build-static.sh to the remote server.      ##
##   Current user should have remote ssh keys installed on the server.        ##
##---------------------------------------------------------------------------~##

##
## Remote Configuration
##

$SOURCE_FOLDER = "out/*";
$REMOTE_SERVER = "mateus@mateus.digital";
$REMOTE_FOLDER = "/var/www/mateus.digital/html";

##
## Extract build version from pages/index.js
##

$version = (bump-version --show-version-full);
Write-Host "==> VERSION: $version";

##
## Deploy files using SCP
##
Write-Host "Uploading files to ${REMOTE_SERVER}:${REMOTE_FOLDER}"
scp -r ${SOURCE_FOLDER} "${REMOTE_SERVER}`:${REMOTE_FOLDER}"

# Write-Host "Deployment completed successfully!"
