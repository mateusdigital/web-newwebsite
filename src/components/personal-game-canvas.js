
export default function PersonalGameCanvas_({ info }) {
  const name = info.name;
  const type = info.type;

  if (info.is_playable_on_canvas) {
    return (
      <>
        <div className="proj-canvas-container">
          {/* <canvas id="projCanvas" data-project-name={name}></canvas> */}
          <iframe id="gameIFrame" data-project-name={name}></iframe>
          <script src="/src/load-game-iframe.js" defer></script>
        </div>
      </>
    );
  }

  const src = `/img/${type}/${name}.png`;
  return (
    <img className="project-detail-personal-game-img" src={src}></img>
  )
}