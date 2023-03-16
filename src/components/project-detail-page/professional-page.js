import DefaultPage_ from "@/components/default-page";
import ProjectPresentation_ from "@/components/project-detail-page/project-presentation";
import ProjectTitleAndCompany_ from "@/components/project-detail-page/project-title-and-company";

export default function ProfessionalPage_({info, children}) {

    const role = info.role;
    const tech = info.tech.join(", ");
    const year = info.year;

    return (
        <>
             <DefaultPage_>
                <main className="project-details">
                    <ProjectPresentation_ info={info}/>
                    <ProjectTitleAndCompany_ info={info}/>
                    {children}

                    <ul>
                        <li><b>Role:</b> {role}</li>
                        <li><b>Tech:</b> {tech}</li>
                        <li><b>Year:</b> {year}</li>
                    </ul>
                </main>
            </DefaultPage_>
        </>
    )
}