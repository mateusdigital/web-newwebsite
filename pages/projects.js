import Head_            from "@/components/head";
import Header_          from "@/components/header";
import Nav_             from "@/components/nav";
import ProjectItemCard_ from "@/components/project-item-card";

export default function Games() {
  return (
    <>
        <Head_ />

        <Header_ />
        <Nav_ />

        <main className="projects-list">
            <section>
                <h1>Creative <span>Coding</span></h1>
                <div className="grid-container">
                    <ProjectItemCard_ name="roses"        title="Roses"         year="2020" platform="Web" />
                    <ProjectItemCard_ name="flowfield"    title="Flowfield"     year="2020" platform="Web" />
                    <ProjectItemCard_ name="lissajous"    title="Lissajous"     year="2020" platform="Web" />
                    <ProjectItemCard_ name="doom_fire"    title="Doom Fire!"    year="2020" platform="Web" />
                    <ProjectItemCard_ name="game_of_life" title="Game of Life"  year="2020" platform="Web" />
                    <ProjectItemCard_ name="simple_tree"  title="Simple Tree!"  year="2020" platform="Web" />
                    <ProjectItemCard_ name="simple_clock" title="Simple Clock!" year="2020" platform="Web" />
                    <ProjectItemCard_ name="metaballs"    title="Metaballs"     year="2020" platform="Web" />
                    <ProjectItemCard_ name="starfield"    title="Starfield"     year="2020" platform="Web" />
                </div>
            </section>

            <section>
                <h1>FLOSS  <span>Contributions</span></h1>
                <li><a href="http://www.libreflix.org">libreflix</a>
                    <a href="https://notabug.org/libreflix/libreflix/pulls/17">(#17)</a>
                </li>

                <li>Cocos2d-x
                    <a href="https://github.com/cocos2d/cocos2d-x/pull/16466">(#16466)</a>
                    <a href="https://github.com/cocos2d/cocos2d-x/pull/16789">(#16789)</a>
                </li>

                <li>2048py
                    <a href="https://github.com/davidsousarj/2048py/pull/2">(#2)</a>
                </li>
            </section>

            <section>
                <h1>Past <span>Work</span></h1>

                <span>Ginga.One</span>
                <li><a href="https://itunes.apple.com/us/app/pequenos-criativos-school/id1254907412?mt=8">Pequenos Criativos</a> </li>
                <li><a href="https://itunes.apple.com/br/app/porto-seguro-auto/id940308962?mt=8">Porto Seguro Auto</a> </li>
                <br/>

                <span>Imidiar</span>
                <li>Photo Totem</li>
                <br/>

                <span>Eazz</span>
                <li>Metro Genius</li>
                <li>donkey.bas</li>
                <br/>

                <span>Devilware</span>
                <li>Pirates Treasure</li>
                <li>Tic Tac Toe</li>
            </section>
        </main>
    </>
  )
}
