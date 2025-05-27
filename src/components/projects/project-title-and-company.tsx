import _HACK_UBISOFT_LOGO from "../components/project-detail-page/_hack_ubisoft_logo"
import _HACK_WARGAMING_LOGO from "../components/project-detail-page/_hack_wargaming_logo"
import _HACK_MINICLIP_LOGO from "../components/project-detail-page/_hack_miniclip_logo"
import _HACK_FIREHORSE_LOGO from "../components/project-detail-page/_hack_firehorse_logo"

export default function ProjectTitleAndCompany_({ info }) {
  const title = info.title;
  const company = info.company.toLowerCase();

  const logo_src = `/img/company-logos/.svg`;

  let item = null;
  if(company == "ubisoft") {
      item = new _HACK_UBISOFT_LOGO();
  } else if(company == "wargaming") {
      item = new _HACK_WARGAMING_LOGO();
  } else if(company == "miniclip") {
      item = new _HACK_MINICLIP_LOGO();
  }  else if(company == "firehorse") {
      item = new _HACK_FIREHORSE_LOGO();
  } else {
    debugger;
  }



  return (
    <>
      <header className="projectDetailPageTitleContainer">
        <h1>{title}</h1>
        <div className="projectDetailPageCompanyLogoContainer">
          {item}
        </div>
      </header>
    </>
  )
}