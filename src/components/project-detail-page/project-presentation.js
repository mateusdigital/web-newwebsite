import DemoCanvas_ from "../demo-canvas";
import YTVideo_ from "../yt-video";

export default function ProjectPresentation_({info}) {
    console.log(info)
    let top_element = null;
    if(info.show_youtube_video) {
        const video_id = info.youtube_video_id;
        top_element = YTVideo_({video_id});
    } else if (info.show_canvas) {
        top_element = DemoCanvas_(info.name);
    }

    return (
        <>
            <div className="proj-canvas-container">
                {top_element}
            </div>
        </>
    )
}