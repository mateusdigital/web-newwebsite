import DefaultPage_ from "@/components/default-page";
import ProjectItemCard_ from '@/components/projects-list-page/project-item-card'

export default function Projects() {
    return (
      <>
        <DefaultPage_ page="projects">
            <section>
                <h1>Creative <span>Coding</span></h1>
                <div className="grid-container">
                    <ProjectItemCard_ name="roses"       />
                    <ProjectItemCard_ name="flowfield"   />
                    <ProjectItemCard_ name="lissajous"   />
                    <ProjectItemCard_ name="doom_fire"   />
                    <ProjectItemCard_ name="game_of_life"/>
                    <ProjectItemCard_ name="simple_tree" />
                    <ProjectItemCard_ name="simple_clock"/>
                    <ProjectItemCard_ name="metaballs"   />
                    <ProjectItemCard_ name="starfield"   />
                </div>
            </section>

            <section>
                <h1>FLOSS <span>Contributions</span></h1>
                <ul>
                    <li>
                        <span><a href="http://www.libreflix.org">libreflix</a>:</span>
                        <a href="https://notabug.org/libreflix/libreflix/pulls/17">(#17)</a>
                    </li>

                    <li>
                        <span>Cocos2d-x:</span>
                        <a href="https://github.com/cocos2d/cocos2d-x/pull/16466">(#16466)</a>
                        <a href="https://github.com/cocos2d/cocos2d-x/pull/16789">(#16789)</a>
                    </li>

                    <li>
                        <span>2048py:</span>
                        <a href="https://github.com/davidsousarj/2048py/pull/2">(#2)</a>
                    </li>
                </ul>
            </section>

            <section>
                <h1>Past <span>Work</span></h1>

                <ul>
                    <span><b>Ginga.One</b></span>
                        <li>Pequenos Criativos <span className="text-detail"> - iOS</span></li>
                        <li>Porto Seguro Auto <span className="text-detail"> - iOS</span></li>
                    <br/>

                    <span><b>Imidiar</b></span>
                        <li>Photo Totem <span className="text-detail"> - Python</span></li>
                    <br/>

                    <span><b>Eazz</b></span>
                        <li>Metro Genius <span className="text-detail"> - Windows Phone </span></li>
                        <li>donkey.bas <span className="text-detail"> - Windows Phone </span></li>
                        <li>Pirates Treasure <span className="text-detail"> - Windows Phone </span></li>
                        <li>Tic Tac Toe <span className="text-detail"> - Windows Phone </span></li>
                </ul>
            </section>
        </DefaultPage_>
    </>
  )
}
