
import DefaultPage_ from "@/components/default-page";
import ProjectPresentation_ from "@/components/project-detail-page/project-presentation";
import ProjectTitle_ from "@/components/project-detail-page/project-title";
import ProjectTitleAndCompany_ from "@/components/project-detail-page/project-title-and-company";

export default function ProjectDetailPage_({info, children}) {

    let elem = null;
    if(info.type == "demo") {
        elem = ProjectTitle_({info});
    } else if(info.type == "professional") {
        elem = ProjectTitleAndCompany_({info});
    }

    return (
        <>
             <DefaultPage_>
                <main className="project-details">
                    <ProjectPresentation_ info={info}/>
                    {elem}
                    {children}
                </main>
            </DefaultPage_>
        </>
    )
}