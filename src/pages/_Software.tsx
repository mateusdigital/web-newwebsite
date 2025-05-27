import DefaultPage from "../components/DefaultPage";
import ProjectItemCard_ from '../components/projects/ProjectItemCard'
import GamesInformation_ from "@/models/ProjectsInfo";
import Link from "../components/link";


//
// Helpers
//
// -----------------------------------------------------------------------------
function _CreateYTCard(ytId, title, detail, year) {
  const yt_url = `https://www.youtube.com/watch?v=${ytId}`;
  const img_path = `https://img.youtube.com/vi/${ytId}/default.jpg`;
  const alt_text = title;
  return (<>
    <div className="projectsGridCard">
      <Link href={yt_url} >
      </Link>
      <div className="projectsGridCardImage">
        <img src={img_path} alt={alt_text} />
      </div>
      <div className="projectsGridCardInfo">
        <span className="projectListCardInfoTitle">{title}</span>
        <div className="projectListCardInfoRightContainer">
          ({detail})
          <span className="projectListCardInfoYear">{year}</span>
        </div>
      </div>
    </div>
  </>);
}
function _CreateImgCard(imgUrl, href, title, detail, year) {
  const alt_text = title;
  return (<>
    <div className="projectsGridCard">
      <Link href={href} >
      </Link>
      <div className="projectsGridCardImage">
        <img src={imgUrl} alt={alt_text} />
      </div>
      <div className="projectsGridCardInfo">
        <span className="projectListCardInfoTitle">{title}</span>
        <div className="projectListCardInfoRightContainer">
          ({detail})
          <span className="projectListCardInfoYear">{year}</span>
        </div>
      </div>
    </div>
  </>);
}
//
// Component
//

// -----------------------------------------------------------------------------
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
      <DefaultPage pageId="projects">
        {/* ----------------------------------------------------------------- */}
        <section>
          <h1>Creative <span>Coding</span></h1>
          <div className='gridContainer5'>
            {projectCards}
          </div>
        </section>

        {/* ----------------------------------------------------------------- */}
        <section>
          <h1>Talks / Podcasts</h1>
          <div className='gridContainer3'>
            {_CreateYTCard("diSLvMutYH0", "CTRL ALT - Tudo Sobre Unreal Engine #1", "Youtube", 2023)}
            {_CreateYTCard("InM81C0S65E", "CTRL ALT - Tudo Sobre Unreal Engine #2", "Youtube", 2023)}
            {_CreateYTCard("zKkm6iGo5uE", "GDTK - Bate Papo Game Dev", "Youtube", 2023)}
            {_CreateImgCard(
              "https://www.carreirasemfronteiras.com.br/wp-content/uploads/2020/10/Carreira-86-300x300-1.png",
              "",
              "Carreiras Sem Fronteiras #86 - Desenvolvedor de Jogos em Minsk, Belarus",
            )}
          </div>
        </section>
        {/* ----------------------------------------------------------------- */}
        <section>
          <h1>Other Programs</h1>
          <ul>
            <li> <span><a href="">tiled-to-map</a></span> <span className="textDetail">(Game Dev Utility App)</span> </li>
            <li> <span><a href="">simple-sprite-sheet</a></span> <span className="textDetail">(Game Dev Utility App)</span> </li>
            <li> <span><a href="">psd-to-png</a></span> <span className="textDetail">(Image Utility App)</span> </li>
          </ul>

          <ul>
            <li> <span><a href="">mdheader</a></span> <span className="textDetail">(VSCode Extension)</span> </li>
            <li> <span><a href="">mdcomments</a></span> <span className="textDetail">(VSCode Extension)</span> </li>
            <li> <span><a href="">autopeacock</a></span> <span className="textDetail">(VSCode Extension)</span> </li>
          </ul>

          <ul>
            <li><span><a href="">gosh</a></span> <span className="textDetail">(Terminal Utility)</span></li>
            <li><span><a href="">repochecker</a></span> <span className="textDetail">(Terminal Utility)</span></li>
          </ul>

          <ul>
            <li> <span><a href="">mdjs</a></span> <span className="textDetail">(Javascript Utility Library)</span> </li>
            <li> <span><a href="">mdgb</a></span> <span className="textDetail">(Game Boy Utility Library)</span> </li>
            <li> <span><a href="">mddos</a></span> <span className="textDetail">(MSDOS Utility Library)</span> </li>
          </ul>
        </section>

        {/* ----------------------------------------------------------------- */}
        <section>
          <h1>Open Source <span>Contributions</span></h1>
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

        {/* ----------------------------------------------------------------- */}
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
      </DefaultPage >
    </>
  )
}
