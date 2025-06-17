//----------------------------------------------------------------------------//
//                               *       +                                    //
//                         '                  |                               //
//                     ()    .-.,="``"=.    - o -                             //
//                           '=/_       \     |                               //
//                        *   |  '=._    |                                    //
//                             \     `=./`,        '                          //
//                          .   '=.__.=' `='      *                           //
//                 +                         +                                //
//                      O      *        '       .                             //
//                                                                            //
//  File      : projects.js                                                   //
//  Project   : new-website                                                   //
//  Date      : 2023-03-07                                                    //
//  License   : See project's COPYING.TXT for full info.                      //
//  Author    : mateus.digital <hello@mateus.digital>                         //
//  Copyright : mateus.digital - 2023 - 2025                                  //
//                                                                            //
//  Description :                                                             //
//                                                                            //
//----------------------------------------------------------------------------//

// -----------------------------------------------------------------------------
import Link from "../components/Link";
import { DefaultPage }  from "../components/DefaultPage";
import ProjectItemCard from "../components/ProjectItemCard";
import { GetProjectsInfo, Project } from "../models/ProjectsInfo";

//
// Component
//

// -----------------------------------------------------------------------------
export default function Projects() {
  const projects = GetProjectsInfo();

  const demos = projects.FindProject((item: Project) => {
    return item.project_type === "demo";
  });

  return (
    <>
      <DefaultPage pageId="projects">
        <_Section title="Creative" subtitle="Coding" columns="4">
          {demos.map((item: Project, index: number) => (
            <ProjectItemCard key={index} item={item} />
          ))}
        </_Section>

        <_Section title="Talks" subtitle="/ Podcasts" columns="3">
          {_CreateYTCard("diSLvMutYH0", "CTRL ALT - Tudo Sobre Unreal Engine #1", "Youtube", 2023)}
          {_CreateYTCard("InM81C0S65E", "CTRL ALT - Tudo Sobre Unreal Engine #2", "Youtube", 2023)}
          {_CreateYTCard("zKkm6iGo5uE", "GDTK - Bate Papo Game Dev", "Youtube", 2023)}
        </_Section>

        {_CreateImgCard(
          "/img/projects/talks/Carreira-86-300x300-1.png",
          "https://web.archive.org/web/20210512050831/https://www.carreirasemfronteiras.com.br/desenvolvedor-de-jogos-em-minsk-belarus-carreira-sem-fronteiras-86/",
          "Carreiras Sem Fronteiras #86",
          "",
          2020
        )}
        <br/>

        <_Section title="Open Source" subtitle="Contributions" columns="0">
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
        </_Section>

        <_Section title="Past" subtitle="Work" columns="0">
          <ul>
            <span><b>Ginga.One</b></span>
            <li><span>Pequenos Criativos</span><span className="textDetail"> - iOS</span></li>
            <li><span>Porto Seguro Auto</span><span className="textDetail"> - iOS</span></li>
            <br />

            <span><b>Imidiar</b></span>
            <li><span>Photo Totem</span><span className="textDetail"> - Python</span></li>
            <br />

            <span><b>Eazz</b></span>
            <li><span>Metro Genius</span><span className="textDetail"> - Windows Phone</span></li>
            <li><span>donkey.bas</span><span className="textDetail"> - Windows Phone</span></li>
            <li><span>Pirates Treasure</span><span className="textDetail"> - Windows Phone</span></li>
            <li><span>Tic Tac Toe</span><span className="textDetail"> - Windows Phone</span></li>
          </ul>
        </_Section>
      </DefaultPage>
    </>
  );
}

//
// Helpers
//

// -----------------------------------------------------------------------------
function _Section({ title, subtitle, columns, children }: any) {
  return (
    <section>
      <h1>{title} <span>{subtitle}</span></h1>
      <div className={"gridContainer" + columns}>
        {children}
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
function _CreateYTCard(ytId: string, title: string, detail: string, year: number) {
  const yt_url = `https://www.youtube.com/watch?v=${ytId}`;
  const img_path = `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`;
  const alt_text = title;

  return (
    <div className="projectCard" key={title}>
      <Link href={yt_url}>
        <div className="projectCardYTandImgContainer">
          <img src={img_path} alt={alt_text} />
          {title}
        </div>
      </Link>
    </div>
  )
}

// -----------------------------------------------------------------------------
function _CreateImgCard(imgUrl: string, href: string, title: string, detail?: string, year?: number) {
  const alt_text = title;
  return (
    <div className="projectCard" key={title}>
      <div className="projectCardYTandImgContainer">
        <Link href={href}>
          <img src={imgUrl} alt={alt_text} />
        </Link>
        <Link href={href}>
          {title}
        </Link>
      </div>
    </div >
  )
}
