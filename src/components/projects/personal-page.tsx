import DefaultPage from "../components/DefaultPage";
import ProjectPresentation_ from "../components/project-detail-page/project-presentation";
import Link from "../link";
import ProjectTitle_ from "./project-title";

export default function PersonalPage_({ info, children }) {

  return (
    <>
      <DefaultPage>
        <main className="project-details">
          <ProjectPresentation_ info={info} />
          <ProjectTitle_ info={info} />
          {children}
        </main>
      </DefaultPage>
    </>
  )
}