
import DefaultPage from "../components/DefaultPage";
import Link from "../components/link";
import GetProjectPageInfo from "../components/project-detail-page/get-project-detail-page-info";
import YTVideo_ from "../components/yt-video";
import ProjectTitle_ from "../components/project-detail-page/project-title"

import CallToPlayButton_ from "../components/call-to-play-button";

export default function Page() {
  const info = GetProjectPageInfo()

  const name = info.name;
  const tech = info.tech.join(", ");
  const year = info.year;

  const license = "GPLv3";

  const git_url     = "https://bitbucket.org/b13h/the-mistral-report";
  const itch_url    = "https://montyontherun.itch.io/the-mistral-report";
  const git_url_clean     = git_url.replace("https://", "");
  const itch_url_clean    = itch_url.replace("https://", "");

  return (
    <>
      <DefaultPage pageId="games">
        <div className="projectDetailPageCanvasContainer" info={info}>
          <YTVideo_ video_id="WOTBzn-LciM">
          </YTVideo_>
          <ProjectTitle_ info={info} />

          <section>
            <p>
              The Mistral Report: Invisible Affairs is an espionage-themed turn-based retro RPG for your classic machine.
            </p>

            <p>
              I co-created the game, together with my good friend and super talented hacker <a href="https://montyontherun.itch.io/the-mistral-report">"@montyontherun"</a>,
              for the MSDOS release. It was my first retro game and I loved the experience!
            </p>

            <p>
              The game is available for a myriad of platforms - 486s, Amigas, PPC Macs, OSX, Windows, etc - and it's quite nice to play!
              Check his Itch.io :)
            </p>

            <ul>
              <b>General Info:</b><br />
              <li><b>Tech:</b> {tech}</li>
              <li><b>Year:</b> {year}</li>
              <li><b>License:</b> {license}</li>
            </ul>
            <ul>
              <b>Links:</b><br />
              <li><b>Source Code:</b> <Link href={git_url}>{git_url_clean}</Link></li>
              <li><b>Itch.io:</b> <Link href={itch_url}>{itch_url_clean}</Link></li>
            </ul>
          </section>
        </div>
      </DefaultPage>
    </>
  )
}
