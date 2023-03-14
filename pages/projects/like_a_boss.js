
import Head_       from "@/components/head";
import Header_     from "@/components/header";
import Nav_        from "@/components/nav";
import DemoCanvas_ from "@/components/demo-canvas";
import DemoScripts from "@/components/demo-scripts";
import GamesInformation_ from "@/components/games/games-information";

import Link_ from "@/components/link";
import YTVideo_ from "@/components/yt-video";
import FirehorseLogo_ from "@/components/logos/firehorse-logo";


export default function Roses() {
    const info = GamesInformation_("like_a_boss");
    const info_name  = info.name;
    const info_title = info.title;
    const info_url   = `/modules/demos/${info_name}/website/index.html`;
    const info_repo_url = `https://github.com/mateus-earth/${info_name}`;

    return (
        <>
            <Head_ />
            <Header_ />
            <Nav_ />

            <main className="project-details">
                <div className="proj-canvas-container">
                    <YTVideo_ video_id="gqNCs0slp8U"></YTVideo_>
                </div>

                <header>
                    <h1>{info_title}</h1>
                    <FirehorseLogo_/>
                </header>

                <section>
                    <p>
                        It is the studio's main game, Like a Boss is an Action RPG where
                        you are the epic Raid Boss at the end of a dungeon, crushing
                        players (the heroes) as they come to steal your treasures.
                    </p>
                    <p>
                        As an additional programmer, I was responsible for numerous code
                        refactoring, improvements, bug fixes, and other optimizations
                        that are typically not available to the main team.

                        I created custom <i>Editor Scripts</i> to ease some game development operations
                    </p>
                </section>
            </main>
        </>
    )
}
