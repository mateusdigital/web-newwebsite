import Link_             from "@/components/link";
import GamesInformation_ from "@/components/games/games-information";

export default function ProjectItemCard_({name}) {
    const info = GamesInformation_(name);

    if(!info) {
        debugger;
        console.log(name);
        return (<></>)
    }

    const title    = info.title;
    const year     = info.year;
    const platform = info.platform_icons.join(" ");
    const type     = info.type;
    console.log(platform);
    const img_extension = (type == "demo") ? "gif" : "png";

    const details_page_url = `/projects/${name}`;
    const img_path         = `/img/${type}/${name}.${img_extension}`;

    const alt_text = `Screenshot of "${title}"`;

    return (
        <>
            <div className="projectsGridCard">
                <Link_ href={details_page_url}>
                    <div>
                        <img src={img_path} alt={alt_text}/>
                    </div>

                    <div className="projectsGridCardInfo">

                        <span className="project-list-card-info-title">{title}</span>
                        <div className="projectListCardInfoRightContainer">
                            <span className="projectListCardInfoPlatform" dangerouslySetInnerHTML={{__html: platform}} />
                            <span className="projectListCardInfoYear">{year}</span>
                        </div>
                    </div>
                </Link_>
            </div>
        </>
    )
}
