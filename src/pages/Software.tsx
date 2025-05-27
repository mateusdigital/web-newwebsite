// -----------------------------------------------------------------------------
import DefaultPage from "../components/DefaultPage";
import ProjectItemCard from "../components/projects/ProjectItemCard"
import { ProjectsInfo } from "../models/ProjectsInfo";



//
// Component
//

// -----------------------------------------------------------------------------
export default function Software() {
  const projects = ProjectsInfo();

  const tools = projects.FindProject((item: any) => {
    return item.project_type == "tool";
  });

  const vscode_ext = projects.FindProject((item: any) => {
    return item.project_type == "vscode";
  });


  return (
    <DefaultPage pageId="software">
      <_Section title="Tools" subtitle="" columns="3">
        {tools.map((item: any, index: number) => {
          return (<>
           {item.project_name}
           <br/>
          </>);
        })}
      </_Section>

      <_Section title="VSCode" subtitle="Extensions" columns="3">
        {vscode_ext.map((item: any, index: number) => {
          return (<>
           {item.project_name}
           <br/>
          </>);
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
