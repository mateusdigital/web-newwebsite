
import DefaultPage from "../components/DefaultPage";
import GetProjectPageInfo from "../components/project-detail-page/get-project-detail-page-info";
import ProjectTitle_ from "../components/project-detail-page/project-title"
import UnderConstruction from "../components/under-construction";

export default function Page() {
  const info = GetProjectPageInfo()
  return (
    <>
      <DefaultPage pageId="games">
        <UnderConstruction />
        <ProjectTitle_ info={info} />

        <section>
          <p>
            This page is under construction <b>:)</b>
          </p>

          <ul>
            <b>General Info:</b><br />
            <li><b>Tech:</b> </li>
            <li><b>Year:</b></li>
            <li><b>License:</b></li>
          </ul>
          <ul>
            <b>Links:</b><br />
            <li><b>Project Website:</b></li>
            <li><b>Source Code:</b></li>
            <li><b>Itch.io:</b></li>
          </ul>
        </section>
      </DefaultPage >
    </>
  )
}
