import DefaultPage_ from "@/components/default-page";
import ProjectPresentation_ from "@/components/project-detail-page/project-presentation";
import ProjectTitleAndCompany_ from "@/components/project-detail-page/project-title-and-company";

export default function ProfessionalPage_({ info, children }) {

  const role = info.role;
  const tech = info.tech.join(", ");
  const year = info.year;
  const platform_title = "Platform" + ((info.platform.length != 1) ? "s" : "");
  const platform_content = info.platform.map((element, index) => {
    return " " + info.platform_icons[index] + " " + element;
  }).join(", ");

  return (
    <>
      <DefaultPage_ page_id="games">
        <section className="projectDetailPageContainer">
          <ProjectPresentation_ info={info} />
          <ProjectTitleAndCompany_ info={info} />
          {children}

          <ul>
            <b>General Info:</b><br/>
            <li><b>Role:</b> {role}</li>
            <li><b>Tech:</b> {tech}</li>
            <li><b>Year:</b> {year}</li>
            <li>
              <b>{platform_title}:</b>
              <span dangerouslySetInnerHTML={{ __html: platform_content }}></span>
            </li>
          </ul>
        </section>
      </DefaultPage_>
    </>
  )
}