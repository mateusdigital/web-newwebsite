
import DefaultPage_ from "@/components/default-page";
import ProjectTitleAndCompany_ from "@/components/project-detail-page/project-title-and-company";
import ProjectPresentation_ from "@/components/project-detail-page/project-presentation";


export default function ProjectDetailPage_({info, children}) {
    return (
        <>
             <DefaultPage_>
                <main className="project-details">
                    <ProjectPresentation_ info={info}/>
                    <ProjectTitleAndCompany_ info={info}/>
                    {children}
                </main>
            </DefaultPage_>
        </>
    )
}