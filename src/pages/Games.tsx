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


// //
// // Component
// //

// // -----------------------------------------------------------------------------
// export default function Games() {


//   return (<>
//     <DefaultPage pageId="games">
//       <section>
//         {/* ---------------------------------------------------------------- */}
//         <h1>Professional <span>Games</span></h1>
//         <div className="gridContainer3">
//           {projects.professional.map((item, index) => {
//             return (
//               <ProjectItemCard_ key={index} name={item.name} />
//             );
//           })}
//         </div>
//       </section>

//       {/* ---------------------------------------------------------------- */}
//       <section>
//         <h1>Retro <span>Games</span></h1>
//         <div className="gridContainer3">
//           <ProjectItemCard_ name="el_jamon_volador" />
//           <ProjectItemCard_ name="the_mistral_report" />
//         </div>
//       </section>

//       {/* ---------------------------------------------------------------- */}
//       <section>
//         <h1>Personal <span>Games</span></h1>
//         <div className="gridContainer3">
//           <ProjectItemCard_ name="koliery" />
//           <ProjectItemCard_ name="same_game" />
//           <ProjectItemCard_ name="nuclear_rain" />
//           <ProjectItemCard_ name="cosmic_intruders" />
//           <ProjectItemCard_ name="simple_snake" />
//         </div>
//       </section>

//       <section>
//         <h1>Very Old<span> Games</span></h1>
//         <div className="gridContainer5">
//           <ProjectItemCard_ name="color_grid" />
//           <ProjectItemCard_ name="memory_amazing_cow" />
//           <ProjectItemCard_ name="bow_and_arrow" />
//           <ProjectItemCard_ name="kaboom" />
//           <ProjectItemCard_ name="ram_it" />
//           <ProjectItemCard_ name="space_raiders" />
//           <ProjectItemCard_ name="taz" />
//         </div>
//       </section>

//     </DefaultPage>
//   </>);
// }
