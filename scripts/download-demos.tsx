#!/usr/bin/env node
// -----------------------------------------------------------------------------
const fs = require("fs");
const path = require("path");
const { exec } = require('child_process');


// -----------------------------------------------------------------------------
const script_dir = path.normalize(__dirname);
const root_dir   = path.dirname(script_dir);


function git_clone(name, git_path) {
    const git_user = "mateusdigital";
    const git_url = `https://github.com/${git_user}/${name}`;
    const git_cmd = `git clone --recursive "${git_url}" "${git_path}"`;

    log.D(`[gitclone] ${git_url} ${git_path}`);

    exec(git_cmd, (error, stdout, stderr) => {
        if (error) {
            log.E(`exec error: ${error}`);
            return;
        }

        log.D(`---> Downloading ${name}`);
        // log.D(`stdout: ${stdout}`);
        // log.E(`stderr: ${stderr}`);
    });
}


// -----------------------------------------------------------------------------
// Download the Demos...
const GamesInformation_ = require(`${root_dir}/src/components/games/games-information`);
const list = GamesInformation_();
for(let item of list) {
    let folder = "";
    if(item.type == "demo") {
        folder = "demos"
    } else if(item.type == "personal" || item.type == "old") {
        folder = "games";
    } else {
        continue;
    }

    const name     = item.name.trim();
    const git_path = `${root_dir}/public/modules/${folder}/${name}`;
    if(fs.existsSync(git_path)) {
        log.D(`---> ${name} is already cloned`);
        continue;
    }

    git_clone(name, git_path);
}

// Download the Demolib...
git_clone("demolib_loader", `${root_dir}/public/modules/demolib_loader`);