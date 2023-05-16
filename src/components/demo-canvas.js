
import path from "path";

export default function DemoCanvas_({ name }) {
  name = name.trim();
  return (
    <>
      <div className="proj-canvas-container">
        <canvas id="projCanvas" data-project-name={name}></canvas>

        <script src="/modules/demolib_loader/source/loader.js"></script>
        <script src="/src/main.js" defer></script>
      </div>
    </>
  );
}