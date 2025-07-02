(function() {
    const canvas       = document.getElementById("projCanvas");
    const project_name = canvas.dataset.projectName.toLowerCase();
    const base_path    =`/modules/demos/${project_name}`;

    demolib_load_script(base_path, `/source/main.js`).then(()=>{
        demolib_load_all_scripts(base_path, __SOURCES).then(()=>{
            if(!canvas) {
                debugger;
            }

            demo_main(canvas);
        }).catch((e) => {
            log.E(e);
            debugger;
        });
    }).catch((e)=> {
        log.E(e);
        debugger;
    })
})();
