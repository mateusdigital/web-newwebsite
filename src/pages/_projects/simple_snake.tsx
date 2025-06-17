
import { DefaultPage } from  "../components/DefaultPage";
import Link from "../components/link";
import GetProjectPageInfo from "../components/project-detail-page/get-project-detail-page-info";
import DemoIframe_ from "../components/demo-iframe";
import ProjectTitle_ from "../components/project-detail-page/project-title"

import CallToPlayButton_ from "../components/call-to-play-button";

export default function Page() {
  const info = GetProjectPageInfo()

  const name = info.name;
  const tech = info.tech.join(", ");
  const year = info.year;

  const license = "GPLv3";

  const git_url = `https://github.com/mateusdigital/${name}`;
  const itch_url = `https://mateusdigital.itch.io/${name}`;
  const project_url = `https://mateus.digital/${name}`;

  const git_url_clean = git_url.replace("https://", "");
  const itch_url_clean = itch_url.replace("https://", "");
  const project_url_clean = project_url.replace("https://", "");

  const url = project_url;
  return (
    <>
      <DefaultPage pageId="games">
        <div className="projectDetailPageCanvasContainer" info={info}>
          <a href={url}>
            <div>
              <iframe src={url} style={{ pointerEvents: 'none' }}></iframe>
            </div>
          </a>

          <ProjectTitle_ info={info} />

          <section>
            <p>
              Simple Snake is a <i>synthwave-esque</i> rendition of the classic snake game.
            </p>

            <p>
              It was one of my first web games, I made it back when I was living in Portugal.
            </p>

            <p>
              For this project I used plain Javascript and the Canvas API, <br/>also I have
              used <a href="https://www.vis4.net/chromajs/">chroma.js</a> for the color manipulation.
            </p>

            <CallToPlayButton_ info={info} />

            <ul>
              <b>General Info:</b><br />
              <li><b>Tech:</b> {tech}</li>
              <li><b>Year:</b> {year}</li>
              <li><b>License:</b> {license}</li>
            </ul>
            <ul>
              <b>Links:</b><br />
              <li><b>Project Website:</b> <Link href={project_url}>{project_url_clean}</Link></li>
              <li><b>Source Code:</b> <Link href={git_url}>{git_url_clean}</Link></li>
              <li><b>Itch.io:</b> <Link href={itch_url}>{itch_url_clean}</Link></li>
            </ul>
          </section>
        </div>
      </DefaultPage>
    </>
  )
}
