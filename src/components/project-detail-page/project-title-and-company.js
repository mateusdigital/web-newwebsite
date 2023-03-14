import GamesInformation_ from "../games/games-information"
import FirehorseLogo_ from "../logos/firehorse-logo";
import MiniclipLogo_ from "../logos/miniclip-logo";
import UbisoftLogo_ from "../logos/ubisoft-logo";
import WargamingLogo_ from "../logos/wargaming-logo";

export default function ProjectTitleAndCompany_({info}) {
    const title   = info.title;
    const company = info.company.toLowerCase();

    let logo = null;
    if(company == "ubisoft") {
        logo = UbisoftLogo_();
    } else if(company == "wargaming") {
        logo = WargamingLogo_();
    } else if(company == "miniclip") {
        logo = MiniclipLogo_();
    } else if(company == "firehorse") {
        logo = FirehorseLogo_();
    }

    return (
        <>
            <header className="project-detail-page_header">
                <h1>{title}</h1>
                {logo}
            </header>
        </>
    )
}