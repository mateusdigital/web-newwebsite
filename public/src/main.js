window.onload = function() {
    const canvas       = document.getElementById("projCanvas");
    const project_name = canvas.dataset.projectName.toLowerCase();

    demolib_load_script(`/modules/demos/${project_name}/source/main.js`).then(()=>{
        demolib_load_all_scripts(__SOURCES).then(()=>{
            if(!canvas) {
                debugger;
            }

            demo_main(canvas);
        }).catch((e) => {
            console.error(e);
            debugger;
        });
    }).catch((e)=> {
        console.error(e);
        debugger;
    })
};
