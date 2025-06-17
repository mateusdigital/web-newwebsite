import { DefaultPage } from "./DefaultPage";
import { Project } from "../models/ProjectsInfo";

//
// Component
//

// -----------------------------------------------------------------------------
export function ProjectDetailPage({ info }: { info: Project }) {

  const raw_html = info.html || [];
  let html = "";

  let p = "<p>";
  for (let i = 0; i < raw_html.length; i++) {
    const line = raw_html[i].trim();
    if (line.length > 0) {
      p += line;
    } else {
      p += "</p>";
      html += p;
      p = "<p>";
    }
  }
  html += p + "</p>";

  return (<>
    <DefaultPage pageId="games">
      <section className="projectsDetailPageContainer">
        {GetPresentationElement(info)}

        <header class="projectDetailPageTitleContainer">
          <h1>{info.project_title}</h1>
          <div class="projectDetailPageCompanyLogoContainer">
            <svg class="projectDetailPageCompanyLogo" viewBox="0 0 217.827 31.758" xmlns="http://www.w3.org/2000/svg"><g id="logo"><g id="miniclip" transform="matrix(1, 0, 0, 1, -122.442871, -22.126305)"><path d="m295.18,53.13h10.2v-30.42h-10.2v30.42Zm41.36-27.4c-2.15-2-4.99-3.08-7.92-3.02h-19.42v30.42h10.2v-9.86h9.22c2.93.06,5.76-1.01,7.92-2.98,4.02-3.52,4.42-9.63.9-13.65-.28-.32-.58-.62-.9-.9m-9.97,9.59h-7.17v-4.66h7.17c2.05,0,3.06.77,3.03,2.33s-.97,2.33-3.03,2.33m-55.63-12.61h-10.2v30.42h30.6v-9.33h-20.39v-21.1Zm-104.62,30.42h10.23v-30.42h-10.23v30.42Zm34.46-22.47c-1.21-2.07-3.57-3.86-7.08-5.39-4.15-1.75-8.62-2.62-13.13-2.56h-.19v30.43h10.2v-15.44c2.29.05,4.46,1.01,6.03,2.68,2.79,2.7,4.19,6.96,4.21,12.76h10.2v-30.43h-10.2v7.95h-.04Zm32.92-3.51c-5.94,5.25-6.5,14.32-1.26,20.26.39.44.81.86,1.26,1.26,3.18,2.93,7.37,4.51,11.69,4.43h11.55v-9.3h-11.52c-1.67.04-3.29-.58-4.51-1.71-2.3-2.07-2.5-5.61-.43-7.91.14-.15.28-.29.43-.43,1.23-1.12,2.84-1.74,4.51-1.72h11.52v-9.32h-11.52c-4.33-.07-8.52,1.53-11.69,4.47m-18.91,25.95h10.2v-30.42h-10.2v30.42Zm-70.19-20.13l-7.62-10.28h-13.77v9.31h3.57v21.11h10.2v-10.28l7.62,10.28,7.66-10.28v10.28h10.28v-30.42h-10.28l-7.66,10.29Z"></path></g></g>
            </svg>
          </div>
        </header>

        <div dangerouslySetInnerHTML={{ __html: html }} />

        {GetGeneralInfoElement(info)}
      </section>
    </DefaultPage >
  </>)
}



//
// Helpers
//

// -----------------------------------------------------------------------------
export function GetPresentationElement(project: Project) {

  let top_element = null;


  // Has Youtube Video Id
  if (project.youtube_video_id) {
    const video_id = project.youtube_video_id;
    const video_url = `https://www.youtube.com/embed/${video_id}?controls=0&autoplay=1&mute=1`;
    const video_title = `Youtube video of ${project.project_title}`;

    return (<>
      <iframe src={video_url}
        title={video_title}
        frameBorder="0"
        allowFullScreen />
    </>);
  }

  // Is playable on canvas
  else if (project.is_playable_on_canvas) {
    return (<>
      <div className="proj-canvas-container">
        {/* <iframe id="gameIFrame" data-project-name={name}></iframe> */}
        <script src="/src/load-game-iframe.js" defer></script>
      </div>
    </>);
  }

  return (<>
  </>);
}


function GetGeneralInfoElement(info: Project) {
  return (<></>);
}