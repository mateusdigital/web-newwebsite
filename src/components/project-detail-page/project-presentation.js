import DemoCanvas_ from "../demo-canvas";
import DemoIframe_ from "../demo-iframe";
import PersonalGameCanvas_ from "../personal-game-canvas";
import YTVideo_ from "../yt-video";

export default function ProjectPresentation_({ info }) {
  const type = info.type;

  let top_element = null;
  const name = info.name;

  // Professional
  if (type == "professional") {
    const video_id = info.youtube_video_id;
    top_element = YTVideo_({ video_id });
  }
  
  // Demo
  else if (type == "demo") {    
    console.log(info.tech)
    if(info.tech.indexOf("demolib") != -1) { 
      top_element = DemoCanvas_({ name });
    } 
    else { 
      top_element = DemoIframe_({ name });
    }
  }

  // Personal / Old
  else if (type == "personal" || type == "old") {
    top_element = PersonalGameCanvas_({ info })
  }

  // Invalid type...
  else {
    debugger;
  }

  return (
    <>
      <div className="projectDetailPageCanvasContainer">
        {top_element}
      </div>
    </>
  )
}