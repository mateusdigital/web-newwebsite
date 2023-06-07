import DefaultPage_ from "@/components/default-page";
import ProjectPresentation_ from "@/components/project-detail-page/project-presentation";
import Link_ from "../link";
import ProjectTitle_ from "./project-title";

export default function PersonalPage_({ info, children }) {

  return (
    <>
      <DefaultPage_>
        <main className="project-details">
          <ProjectPresentation_ info={info} />
          <ProjectTitle_ info={info} />
          {children}
        </main>
      </DefaultPage_>
    </>
  )
}