import Link_             from "@/components/link";
import GamesInformation_ from "@/components/games/games-information";

export default function ProjectItemCard_({name}) {
    const game_info = GamesInformation_(name);

    if(!game_info) {
        console.log(name);
        return (<></>)
    }


    // const alt_text = `Screenshot of "${title}"`
    const title            = game_info.title;
    const year             = game_info.year;
    const platform         = game_info.platform;
    const thumbnail_path   = game_info.thumbnail_path;
    const details_page_url = `/projects/${name}`;

    const alt_text = `Screenshot of "${title}"`;
    const img_path = thumbnail_path;

    return (
        <>
            <article className="project-list-card">
                <Link_ href={details_page_url}>
                    <header>
                        <img src={img_path} alt={alt_text}/>
                    </header>

                    <section className="info">
                        <span>{title}</span>
                        <span>{year}</span>
                        <span>{platform}</span>
                    </section>
                </Link_>
            </article>
        </>
    )
}
