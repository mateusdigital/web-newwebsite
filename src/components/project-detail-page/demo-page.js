import DefaultPage_ from "@/components/default-page";
import ProjectPresentation_ from "@/components/project-detail-page/project-presentation";
import Link_ from "../link";
import ProjectTitle_ from "./project-title";

export default function DemoPage_({info, children}) {
    const name = info.name;
    const tech = info.tech.join(", ");
    const year = info.year;

    const license  = "GPLv3";
    const git_url  = `https://github.com/mateus-earth/${name}`;

    return (
        <>
             <DefaultPage_>
                <main className="project-details">
                    <ProjectPresentation_ info={info}/>
                    <ProjectTitle_ info={info}/>

                    <div className="project-detail-content">
                        {children}
                    </div>

                    <ul className="project-detail-info-list">
                        <li><b>Tech:</b> {tech}</li>
                        <li><b>Year:</b> {year}</li>
                        <li><b>License:</b> {license}</li>
                        <li><b>Source Code:</b> <Link_ href={git_url}>{git_url}</Link_></li>
                    </ul>
                </main>
            </DefaultPage_>
        </>
    )
}