// -----------------------------------------------------------------------------
import DefaultPage from "../components/DefaultPage";
import ProjectItemCard from "../components/projects/ProjectItemCard"
import { ProjectsInfo } from "../models/ProjectsInfo";



//
// Component
//

// -----------------------------------------------------------------------------
export default function Games() {
  const projects = ProjectsInfo();

  const professional_games = projects.FindProject((item: any) => {
    return item.project_type == "game" && item.project_subtype == "professional";
  });

  const retro_Games = projects.FindProject((item: any) => {
    return item.project_type == "game" && item.project_subtype == "retro";
  });

  const personal_games = projects.FindProject((item: any) => {
    return item.project_type == "game" && item.project_subtype == "personal";
  });

  const old_games = projects.FindProject((item: any) => {
    return item.project_type == "game" && item.project_subtype == "old-games";
  });

  return (
    <DefaultPage pageId="projects">
      <_Section title="Professional" subtitle="Games" columns="3">
        {professional_games.map((item: any, index: number) => {
          return (
            <ProjectItemCard key={index} item={item} />
          );
        })}
      </_Section>

      <_Section title="Retro" subtitle="Games" columns="3">
        {retro_Games.map((item: any, index: number) => {
          return (
            <ProjectItemCard key={index} item={item} />
          );
        })}
      </_Section>

      <_Section title="Personal" subtitle="Games" columns="3">
        {personal_games.map((item: any, index: number) => {
          return (
            <ProjectItemCard key={index} item={item} />
          );
        })}
      </_Section>

      <_Section title="Very Old" subtitle="Games" columns="4">
        {old_games.map((item: any, index: number) => {
          return (
            <ProjectItemCard key={index} item={item} />
          );
        })}
      </_Section>
    </DefaultPage>
  );
}

//
// Helpers
//

// -----------------------------------------------------------------------------
function _Section({title, subtitle, columns, children}: any) {
  return (
    <section>
      <h1>{title} <span>{subtitle}</span></h1>
      <div className={"gridContainer" + columns}>
        {children}
      </div>
    </section>
  );
}
