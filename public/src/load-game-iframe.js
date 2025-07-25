
(function() {
const iframe = document.getElementById('gameIFrame');

const project_name = iframe.dataset.projectName.toLowerCase().replace('-', '_');
const base_path = `https://mateus.digital/${project_name}/index.html`;

iframe.src = base_path;

const xxx_iframe_click = document.getElementById('XXX_iframeClick');
if (xxx_iframe_click) {
  xxx_iframe_click.addEventListener('click', () => {
    window.open(base_path, '_blank', 'noopener,noreferrer');
  });
}
})();
