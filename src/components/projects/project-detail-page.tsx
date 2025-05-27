
import DefaultPage from "../components/DefaultPage";
import ProjectPresentation_ from "../components/project-detail-page/project-presentation";
import ProjectTitle_ from "../components/project-detail-page/project-title";
import ProjectTitleAndCompany_ from "../components/project-detail-page/project-title-and-company";

export default function ProjectDetailPage_({info, children}) {

    let title_and_details = null;
    if(info.type == "demo") {
        title_and_details = ProjectTitle_({info});
    } else if(info.type == "professional") {
        title_and_details = ProjectTitleAndCompany_({info});
    }

    return (
        <>
             <DefaultPage>
                <main className="project-details">
                    <ProjectPresentation_ info={info}/>
                    {title_and_details}
                    {children}
                </main>
            </DefaultPage>
        </>
    )
}