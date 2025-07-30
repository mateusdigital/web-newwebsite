// -----------------------------------------------------------------------------
import { ILogger } from "../../libs/mdweb/source/Logger";
import { DefaultPage } from "../components/DefaultPage";
import { Link } from "../components/Link";
import { GetProjectsInfo, Project } from "../models/ProjectsInfo";

import GithubIcon_ from "../components/icons/github";

//
// Component
//

// -----------------------------------------------------------------------------
export default function SoftwarePage({ log }: { log: ILogger }) {
  const projects = GetProjectsInfo();

  const terminal_tools = projects.FindProject((item: Project) => {
    return item.project_type == "tool" && item.project_subtype == "tool-terminal";
  });

  const vscode_tools = projects.FindProject((item: Project) => {
    return item.project_type == "tool"
      && (item.project_subtype == "tool-vscode");
  });

  const game_tools = projects.FindProject((item: Project) => {
    return item.project_type == "tool"
      && (item.project_subtype == "tool-game");
  });

  return (<>
    <DefaultPage pageId="software">
      {/*  */}
      <_SoftwarePageSection
        title="VSCode"
        subtitle="Extensions"
        columns="3"
        projects={vscode_tools}
        log={log} />

      <_SoftwarePageSection
        title="Game Dev"
        subtitle="Tools"
        columns="3"
        projects={game_tools}
        log={log} />

      <_SoftwarePageSection
        title="Terminal"
        subtitle="Tools"
        columns="3"
        projects={terminal_tools}
        log={log} />
    </DefaultPage>
  </>);
}


//
// Private Components
//

// -----------------------------------------------------------------------------
function SoftwareItemCard({ project, log }: { project: Project, log: ILogger }) {
  return (<>
    <Link href="" className="softwareCard" key={project.project_name}>

      <div className="vstack">

        <div className="hstack">
          <div className="iconContainer">
            <img src={project.default_icon} alt={`Icon of ${project.project_name}`}></img>
          </div>

          <div className="vstack">
            <div className="vstack">
              <span className="projectTitle">{project.project_title}</span>
              <span className="projectDescription">{project.project_description}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </>);
}

//
// Helpers
//


//
// Helpers
//

// -----------------------------------------------------------------------------
function _SoftwarePageSection({ title, subtitle, columns, projects, log }: any) {
  return (
    <section>
      <h1>{title} <span>{subtitle}</span></h1>
      <div className={"softwareGridContainer" + columns}>
        {projects.map((project: Project, index: number) => {
          return (
            <SoftwareItemCard key={index} project={project} log={log} />
          );
        })}
      </div>
    </section>
  );
}
