
(function() {
    const iframe = document.getElementById("gameIFrame");

    const project_name = iframe.dataset.projectName.toLowerCase();
    const base_path = `https://mateus.digital/${project_name}/index.html`;

    iframe.src = base_path;
})();
