
import Head_       from "@/components/head";
import Header_     from "@/components/header";
import Nav_        from "@/components/nav";
import DemoCanvas_ from "@/components/demo-canvas";
import DemoScripts from "@/components/demo-scripts";
import GamesInformation_ from "@/components/games/games-information";

import Link_ from "@/components/link";
import YTVideo_ from "@/components/yt-video";
import MiniclipLogo_ from "@/components/logos/miniclip-logo";


export default function Roses() {
    const info = GamesInformation_("skull_and_bones");
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
                    <YTVideo_ video_id="u4sEgDM0EZ0"/>
                </div>

                <header>
                    <h1>{info_title}</h1>
                    <MiniclipLogo_ className="company"/>

                </header>

                <section>

                    <p>
                        Also this was the place tha I met my dearest friend @hugo-just-code :)

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
