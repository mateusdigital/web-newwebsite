// -----------------------------------------------------------------------------
import { DefaultPage } from "../components/DefaultPage";
import ProjectItemCard from "../components/ProjectItemCard"
import { GetProjectsInfo, Project } from "../models/ProjectsInfo";



//
// Component
//

// -----------------------------------------------------------------------------
export default function GamesPage() {
  const projects = GetProjectsInfo();

  const professional_games = projects.FindProject((item: Project) => {
    return item.project_type == "game"
      && item.project_subtype == "game-professional";
  });

  const retro_Games = projects.FindProject((item: Project) => {
    return item.project_type == "game"
      && item.project_subtype == "game-retro";
  });

  const personal_games = projects.FindProject((item: Project) => {
    return item.project_type == "game"
      && item.project_subtype == "game-personal";
  });

  const old_games = projects.FindProject((item: Project) => {
    return item.project_type == "game"
      && item.project_subtype == "game-old";
  });


  return (<>
    <DefaultPage pageId="GamesPage" css="gamesPage">
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
        {retro_Games.map((item: Project, index: number) => {
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
