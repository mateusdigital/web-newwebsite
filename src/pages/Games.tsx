import { fileURLToPath } from "url";
// -----------------------------------------------------------------------------
import { DefaultPage } from "../components/DefaultPage";
import { ProjectItemCard } from "../components/ProjectItemCard"
import { GetProjectsInfo, Project } from "../models/ProjectsInfo";



//
// Component
//

// -----------------------------------------------------------------------------
export function GamesPage() {
  const info = GetProjectsInfo();
  const projects = info.projects;

  let professional_games = [];
  let retro_games = [];
  let personal_games = [];
  let old_games = [];

  // console.log("GamesPage - projects: ", projects);
  console.log("GamesPage - projects.length: ", projects.length);
  for (let i = 0; i < projects.length; i++) {
    const item = projects[i];
    if(item.project_type != "game") {
      continue;
    }

    if(item.project_subtype == "game-professional") {
      professional_games.push(item);
    }
    else if(item.project_subtype == "game-retro") {
      retro_games.push(item);
    }
    else if(item.project_subtype == "game-personal") {
      personal_games.push(item);
    }
    else if(item.project_subtype == "game-old") {
      old_games.push(item);
    }
  }

  return (<>
    <DefaultPage pageId="GamesPage">
      {/*  */}
      <_GamesPageSection title="Professional" subtitle="Games" columns="3">
        {professional_games.map((item: Project, index: number) => {
          return (
            <ProjectItemCard key={index} item={item} />
          );
        })}
      </_GamesPageSection>
      {/*  */}
      <_GamesPageSection title="Retro" subtitle="Games" columns="3">
        {retro_games.map((item: Project, index: number) => {
          return (
            <ProjectItemCard key={index} item={item} />
          );
        })}
      </_GamesPageSection>
      {/*  */}
      <_GamesPageSection title="Personal" subtitle="Games" columns="3">
        {personal_games.map((item: Project, index: number) => {
          return (
            <ProjectItemCard key={index} item={item} />
          );
        })}
      </_GamesPageSection>
      {/*  */}
      <_GamesPageSection title="Very Old" subtitle="Games" columns="4">
        {old_games.map((item: Project, index: number) => {
          return (
            <ProjectItemCard key={index} item={item} />
          );
        })}
      </_GamesPageSection>
    </DefaultPage>
  </>);
}
GamesPage.__metadata = {
  path: fileURLToPath(import.meta.url)
}


//
// Helpers
//

// -----------------------------------------------------------------------------
function _GamesPageSection({ title, subtitle, columns, children }: any) {
  return (
    <section>
      <h1>{title} <span>{subtitle}</span></h1>
      <div className={"gridContainer" + columns}>
        {children}
      </div>
    </section>
  );
}
