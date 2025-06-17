
// -----------------------------------------------------------------------------
import { GetProjectsInfo, Project } from "./models/ProjectsInfo";
import { ProjectDetailPage } from "./components/ProjectDetailPage";
import FileUtils from "../libs/mdweb/source/FileUtils";
import { Assert } from "../libs/mdweb/source/Assert";
import { RenderPage } from "./Render";


// -----------------------------------------------------------------------------
export async function GenerateAllProjectPages(cwd: string = FileUtils.GetCwd()) {
  const output_dir = FileUtils.ForwardSlash(`${cwd}/_dist/projects`);

  const info = GetProjectsInfo();
  const projects = info.projects;

  for (let i = 0; i < projects.length; ++i) {
    const project = projects[i];

    const component = ProjectDetailPage({ info: project });
    const rendered  = RenderPage(component);
    console.log(`Project: ${project.project_name}`);
    console.log(`  Rendered: ${rendered}`);

    // Save to same path in output directory, but with .html extension
    const output_filename = `${output_dir}/${project.project_name}.html`.toLowerCase();

    console.log("Writing page: ", output_filename);

    FileUtils.EnsurePath(output_filename);
    FileUtils.WriteAllFile(output_filename, rendered);
  }
}
