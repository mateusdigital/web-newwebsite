
export default function ProjectTitleAndCompany_({info}) {
    const title   = info.title;
    const company = info.company.toLowerCase();

    const logo_src=`/img/company-logos/${company}-horizontal.png`;

    return (
        <>
            <header className="project-detail-page_header">
                <h1>{title}</h1>
                <img className="project-detail-page-company-logo" src={logo_src}></img>
            </header>
        </>
    )
}