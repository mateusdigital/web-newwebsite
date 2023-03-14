
import Head_       from "@/components/head";
import Header_     from "@/components/header";
import Nav_        from "@/components/nav";
import GamesInformation_ from "@/components/games/games-information";

import Link_ from "@/components/link";
import YTVideo_ from "@/components/yt-video";
import FirehorseLogo_ from "@/components/logos/firehorse-logo";


export default function Roses() {
    const info = GamesInformation_("let_them_come");


    const info_name     = info.name;
    const info_title    = info.title;
    const info_url      = `/modules/demos/${info_name}/website/index.html`;
    const info_repo_url = `https://github.com/mateus-earth/${info_name}`;

    return (
        <>
            <Head_   />
            <Header_ />
            <Nav_    />

            <main className="project-details">
                <div className="proj-canvas-container">
                    <YTVideo_ video_id="IJT5mlPa3Io"></YTVideo_>
                </div>

                <header>
                    <h1>{info_title}</h1>
                    <FirehorseLogo_/>
                </header>

                <section>
                    <p>
                        In this project I was responsible to integrate the AlienFx SDK to YoYo Games' Game Maker.
                        The AlienFx SDK is written in C++ and provided as an DLL file, but it isn't readily usable in Game Maker.
                        My job was write a binding that maps more 1:1 possible the C++ in GML (the Game Maker scripting language).
                        It was very challenging since I had no experience in Game Maker at all, but at end we managed to get it right.
                        I write some shell scripting to ease the studio day to day stuff and I wrote an texture packer algorithm to improve the performance of the particle system.
                    </p>
                </section>


                <section>
                    Role: Additional Programming.
                    Tech: Game Maker, AlienFx SDK, C++
                    <ul>
                        <li><Link_ href={info_url}>Fullpage view</Link_></li>
                        <li><Link_ href={info_repo_url}>Source Code (github)</Link_></li>
                    </ul>
                </section>
            </main>
        </>
    )
}
