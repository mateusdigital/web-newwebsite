import Link_             from "@/components/link";
import GamesInformation_ from "@/components/games/games-information";

export default function ProjectItemCard_({name}) {
    const info = GamesInformation_(name);

    if(!info) {
        debugger;
        console.log(name);
        return (<></>)
    }

        // debugger;
    const title     = info.title;
    const year      = info.year;
    const platform  = info.platform.join( "|");
    const type      = info.type;

    const img_extension = (type == "demo") ? "gif" : "png";

    const details_page_url = `/projects/${name}`;
    const img_path         = `/img/${type}/${name}.${img_extension}`;

    const alt_text = `Screenshot of "${title}"`;

    return (
        <>
            <div className="project-list-card">
                <Link_ href={details_page_url}>
                    <div>
                        <img src={img_path} alt={alt_text}/>
                    </div>

                    <div className="project-list-card-info">
                        <span className="project-list-card-info-title">{title}</span>
                        <div >
                            <span className="project-list-card-info-platform">({platform})</span>
                            <span className="project-list-card-info-year">{year}</span>
                        </div>
                    </div>
                </Link_>
            </div>
        </>
    )
}
