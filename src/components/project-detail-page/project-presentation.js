import DemoCanvas_ from "../demo-canvas";
import YTVideo_ from "../yt-video";

export default function ProjectPresentation_({info}) {
    const project_type = info.type;

    let top_element = null;
    if(project_type == "professional") {
        const video_id = info.youtube_video_id;
        top_element = YTVideo_({video_id});
    } else if (info.show_canvas) {
        const name = info.name;
        top_element = DemoCanvas_({name});
    }

    return (
        <>
            <div className="proj-canvas-container">
                {top_element}
            </div>
        </>
    )
}