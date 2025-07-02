
// -----------------------------------------------------------------------------
import { GetProjectsInfo, Project } from "./models/ProjectsInfo";
import { ProjectDetailPage } from "./components/ProjectDetailPage";
import { FileUtils } from "../libs/mdweb/source/FileUtils";
import { DefaultLogger, ILogger } from "../libs/mdweb/source/Logger";
import { Assert } from "../libs/mdweb/source/Assert";
import { render } from "preact-render-to-string";
import { JSX } from "preact";
import path from "path";
import { RenderPage } from "./Render";




// -----------------------------------------------------------------------------
export async function GenerateProjectsPagesFromData(
  outputDir: string,
  log: ILogger = DefaultLogger
) {
  log.I("Generating project pages from data...");

  const output_dir = FileUtils.ForwardSlash(path.join(outputDir, "projects"));
  FileUtils.EnsurePath(output_dir);

  const info = GetProjectsInfo(log);
  const projects = info.projects;

  log.D("Found projects: ", projects.length);
  for (let i = 0; i < projects.length; ++i) {
    log.D("Processing project: ", i + 1, "/", projects.length);

    const project = projects[i];
    log.D(`Project: ${project.project_name}`);

    const component = ProjectDetailPage({ info: project, log: log });
    const rendered = RenderPage(component, log);
    log.D(`  Rendered: ${rendered.length} bytes`);

    // Save to same path in output directory, but with .html extension
    const output_filename = `${output_dir}/${project.project_name}.html`.toLowerCase();

    log.D("Writing page: ", output_filename);
    log.D("Size: ", rendered.length, " bytes");

    FileUtils.EnsurePath(output_filename);
    FileUtils.WriteAllFile(output_filename, rendered);

    log.D(`Project page written: ${output_filename}`);
  }
}
