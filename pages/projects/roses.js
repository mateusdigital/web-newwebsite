
import Head_       from "@/components/head";
import Header_     from "@/components/header";
import Nav_        from "@/components/nav";
import DemoCanvas_ from "@/components/demo-canvas";
import DemoScripts from "@/components/demo-scripts";
import GamesInformation_ from "@/components/games/games-information";

import Link_ from "@/components/link";

export default function Roses() {
    const info = GamesInformation_("roses");
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
                <DemoCanvas_ project_name={info_name}></DemoCanvas_>
                <header>
                    <h1>{info_title}</h1>
                    <div className="label-container">
                        <span className="label js">javascript</span>
                        <span className="label demolib">demolib</span>
                    </div>
                </header>

                <section>
                    <p>
                        Roses was created in 2020, after I got interested with the patterns
                        that can be created with the formulas.
                    </p>

                    <p>
                        It was created with <Link_ href="">demolib</Link_>, it's licensed as <Link_ href="">GPLv3</Link_>.
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

            <DemoScripts />
        </>
    )
}
