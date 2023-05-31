import DefaultPage_ from "@/components/default-page";
import ProjectItemCard_ from '@/components/projects-list-page/project-item-card'
import GamesInformation_ from "@/components/games/games-information";

export default function Projects() {

  const games_info = GamesInformation_();
  
  // Build all the demo cards automatically.
  const projectCards = [];
  for (let info of games_info) {
    if (info.type === "demo") {
      projectCards.push(<ProjectItemCard_ name={info.name} />);
    }
  }

  return (
    <>
      <DefaultPage_ page_id="projects">
        <section>
          <h1>Creative <span>Coding</span></h1>
          <div className='projectsGridContainer'>
            {projectCards}
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
            <li><span>Pequenos Criativos </span><span className="textDetail"> - iOS</span></li>
            <li><span>Porto Seguro Auto </span><span className="textDetail"> - iOS</span></li>
            <br />

            <span><b>Imidiar</b></span>
            <li><span>Photo Totem</span><span className="textDetail"> - Python</span></li>
            <br />

            <span><b>Eazz</b></span>
            <li><span>Metro Genius</span><span className="textDetail"> - Windows Phone </span></li>
            <li><span>donkey.bas</span><span className="textDetail"> - Windows Phone </span></li>
            <li><span>Pirates Treasure</span><span className="textDetail"> - Windows Phone </span></li>
            <li><span>Tic Tac Toe</span><span className="textDetail"> - Windows Phone </span></li>
          </ul>
        </section>
      </DefaultPage_>
    </>
  )
}
