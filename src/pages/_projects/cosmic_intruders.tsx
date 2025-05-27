
import DefaultPage from "../components/DefaultPage";
import Link from "../components/link";
import GetProjectPageInfo from "../components/project-detail-page/get-project-detail-page-info";
import YTVideo_ from "../components/yt-video";
import ProjectTitle_ from "../components/project-detail-page/project-title"
import PlayIcon from "../components/icons/play-solid"

export default function Page() {
  const info = GetProjectPageInfo()

  const name = info.name;
  const tech = info.tech.join(", ");
  const year = info.year;

  const license = "GPLv3";

  const git_url = `https://github.com/mateusdigital/${name}`;
  const itch_url = `https://mateusdigital.itch.io/${name}`;
  const project_url = `https://mateus.digital/${name}`;
  const play_url = `https://mateus.digital/${name}`;

  const git_url_clean = git_url.replace("https://", "");
  const itch_url_clean = itch_url.replace("https://", "");
  const project_url_clean = project_url.replace("https://", "");
  return (
    <>
      <DefaultPage >
        <div className="projectDetailPageCanvasContainer" info={info}>
          <YTVideo_ video_id="mV4ZHWxk7Gc">
          </YTVideo_>
          <ProjectTitle_ info={info} />

          <section>
            <p>
              Cosmic Intruders is a Space Invaders clone that was made as a test for Miniclip Web Client Developer vacancy by the end of 2017.
            </p>

            <p>
              The project was made in C++ with <b>SDL2</b> as a rendering library, to develop the web version I've used <b>Emscripten</b>.
            </p>

            <p>
              I was so <b>lucky</b> to have the opportunity to make this game since Space Invaders is on my top 10 list (deserving even a tattoo).
              I got hired and in 2018 I went to Portugal to work abroad for the first time :)
            </p>

            <p>
              In 2023, I got interested in some web development and saw a good opportunity to create a landing page
              for the project. I tried to replicate a real old cabinet <i>"vibes"</i>.
            </p>

            <a className="button-call-to-play-online center" href={play_url}>
              <PlayIcon></PlayIcon>
              Play online
            </a>

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


//