#!/usr/bin/env node
// -----------------------------------------------------------------------------
const fs = require("fs");
const path = require("path");
const { exec } = require('child_process');


// -----------------------------------------------------------------------------
const script_dir = path.normalize(__dirname);
const root_dir   = path.dirname(script_dir);


function git_clone(name, git_path) {


    const git_url = `https://github.com/mateus-earth/${name}`;
    const git_cmd = `git clone --recursive "${git_url}" "${git_path}"`;

    console.log(`[gitclone] ${git_url} ${git_path}`);
    return;

    exec(git_cmd, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`---> Downloading ${name}`);
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
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
        console.log(`---> ${name} is already cloned`);
        continue;
    }

    git_clone(name, git_path);
}

// Download the Demolib...
git_clone("demolib_loader", `${root_dir}/public/modules/demolib_loader`);