
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
    const info = GamesInformation_("the_banner_saga");
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
                    <YTVideo_ video_id="y-42WWUOD1M"></YTVideo_>
                </div>

                <header>
                    <h1>{info_title}</h1>
                    <FirehorseLogo_/>
                </header>

                <section>
                    <p>
                        Firehorse and Stoic Studio had the same publisher at the time - VersusEvil, which
                        allowed them to collaborate very interestingly and I ended up working with
                        those amazing award wining games.
                    </p>

                    <p>
                    I was responsible to maintain and improve both games for Stoic Studio.
                    At the time it was a huge challenge, since the games were written in a totally
                    different stack that I was used to. Also the scope of the project - then, the
                    biggest project I'd worked on - made it a true challenge.
                    </p>

                    <p>
                    The game was written in mixture of languages with Action Script 3 as the primally
                    language for the game and tools, and lots of different middleware for multiple
                    platforms. Ant was used as the build system, and Mercurial was the versioning
                    used by the team.
                    </p>

                    <p>
                    I've a pair of meetings with the Stoic team, but mostly of the work was simple
                    done by picking the assigned tasks from Jira and chatting with the devs when
                    problems popped up.
                    </p>
                </section>

                <section>
                    This is one of the most beloved projects that I've worked, it helped to open
                    so many doors and gave me so nice opportunities.
                    After this project I got the opportunity to make Stoic Studio's <Link_ href="/projects/killers_and_thives">Killers and Thieves</Link_>.
                </section>

                    #### Tech:
                    - Action Script 3
                    - Ant
                    - Mercurial
                    - JIRA
            </main>
        </>
    )
}
