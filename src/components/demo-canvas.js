
import path from "path";

export default function DemoCanvas_({project_name}) {
    project_name = project_name.trim();
    project_name = path.basename(project_name);
    project_name = project_name.replace(path.extname(project_name), "");

    return (
        <>
            <div className="proj-canvas-container">
                <canvas id="projCanvas" data-project-name={project_name}></canvas>
            </div>
        </>
    );
}