
import { DefaultPage } from  "../components/DefaultPage";
import { Link }  from "../components/link";
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

  const git_url     = `https://github.com/mateusdigital/${name}`;
  const itch_url    = `https://mateusdigital.itch.io/${name}`;
  const project_url = `https://mateus.digital/${name}`;

  const git_url_clean     = git_url.replace("https://", "");
  const itch_url_clean    = itch_url.replace("https://", "");
  const project_url_clean = project_url.replace("https://", "");

  return (
    <>
      <DefaultPage pageId="games">
        <div className="projectDetailPageCanvasContainer" info={info}>
          <YTVideo_ video_id="VlpMRj9wwLw">
          </YTVideo_>

          <ProjectTitle_ info={info} />

          <section>
            <p>
              After releasing the <Link href="/projects/the_mistral_report">The Mistral Report</Link> I
              got very interested in develop to retro machines, and have chosen the Nintendo Game Boy as the target to make a new game.
            </p>

            <p>
              I decided to make a homage to Flappy Bird, since as a nice gameplay that would still let me understand
              better that tiny marvel machine that the Game Boy was.
            </p>

            <p>
              In 2023, I got interested in some web development and saw a good opportunity to create a cute landing page
              for the project, also I created the <Link href="/projects/gameboy-css">Game Boy Frame in CSS3</Link>.
            </p>

            <span className="textDetail">
              * Thanks for <a href="https://montyontherun.itch.io/">Monty</a> for recording the video.
            </span>

            <CallToPlayButton_ info={info}/>

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
