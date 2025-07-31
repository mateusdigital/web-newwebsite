import { fileURLToPath } from "url";
// -----------------------------------------------------------------------------
import { DefaultPage } from "../components/DefaultPage";
import { ProjectItemCard } from "../components/ProjectItemCard"
import { GetProjectsInfo, Project } from "../models/ProjectsInfo";
import { ILogger } from "../../libs/mdweb/source/Logger";



//
// Component
//

// -----------------------------------------------------------------------------
export default function GamesPage({ log }: { log: ILogger }) {
  const info = GetProjectsInfo();
  const projects = info.projects;

  let professional_games = [];
  let retro_games = [];
  let personal_games = [];
  let old_games = [];

  // log.D("GamesPage - projects: ", projects);
  log.D("GamesPage - projects.length: ", projects.length);
  for (let i = 0; i < projects.length; i++) {
    const item = projects[i];
    if (item.project_type != "game") {
      continue;
    }

    switch (item.project_subtype) {
      case "game-professional": { professional_games.push(item); } break;
      case "game-retro": { retro_games.push(item); } break;
      case "game-personal": { personal_games.push(item); } break;
      case "game-old": { old_games.push(item); break; }
      default: { } break;
    }
  }

  return (<>
    <DefaultPage pageId="games">
      <_GamesPageSection title="Professional" columns="3" projects={professional_games} />
      <_GamesPageSection title="Retro" columns="3" projects={retro_games} />
      <_GamesPageSection title="Personal" columns="3" projects={personal_games} />
      <_GamesPageSection title="Old" subtitle="Games" columns="4" projects={old_games} />
    </DefaultPage>
  </>);
}


//
// Helpers
//

// -----------------------------------------------------------------------------
function _GamesPageSection({ title, subtitle, columns, projects }: any) {
  subtitle = subtitle || "Games";
  return (<>
    <section>
      <h1>{title} <span>{subtitle}</span></h1>
      <div className={"gridContainer" + columns}>
        {projects.map((item: Project, index: number) => {
          return (<>
            <ProjectItemCard key={index} item={item}/>
          </>);
        })}
      </div>
    </section>
  </>);
}
