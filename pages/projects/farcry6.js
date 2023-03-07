
import Head_       from "@/components/head";
import Header_     from "@/components/header";
import Nav_        from "@/components/nav";
import Link_       from "@/components/link";

import GamesInformation_ from "@/components/games/games-information";

import YTVideo_     from "@/components/yt-video";
import UbisoftLogo_ from "@/components/logos/ubisoft-logo";


export default function Roses() {
    const info = GamesInformation_("farcry6");
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
                    <YTVideo_ video_id="-IJuKT1mHO8"/>
                </div>

                <header>
                    <h1>{info_title}</h1>
                    <UbisoftLogo_ className="company"/>
                </header>

                <section>

                    <p>
                                For the second installment of The Maze Runner we had yet another world to turn into a hazardous obstacle run. Organic landscapes with curves, bends and hills set these environments apart from the previous title. I've designed well over 150 level segments for this game, while making sure every single one of them had a unique catch and feel. I was closesly involved in the design and development of obstacles.

                Designed over 150 level segments
                Design of obstacles + tech implementation
                Designed multiple particle effects
Actively participated in game design brainstorms

                    </p>
                </section>


                <section>
                    Links:
                    <ul>
                        <li><Link_ href={info_url}>Fullpage view</Link_></li>
                        <li><Link_ href={info_repo_url}>Source Code (github)</Link_></li>
                    </ul>
                </section>
            </main>

            {/* <DemoScripts /> */}
        </>
    )
}
