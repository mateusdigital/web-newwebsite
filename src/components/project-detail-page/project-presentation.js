import Script from "next/script";
import DemoCanvas_ from "../demo-canvas";
import YTVideo_ from "../yt-video";
import Image from "next/image"

export default function ProjectPresentation_({info}) {
    const type = info.type;

    let top_element = null;
    let bottom_element = "";

    const name = info.name;

    if(type == "professional") {
        const video_id = info.youtube_video_id;
        top_element = YTVideo_({video_id});
    }

    else if (type == "demo") {
        top_element = DemoCanvas_({name});
    }

    else if(type == "personal") {
        const src = `/img/personal/${name}.png`;
        const img = (<img className="project-detail-personal-game-img" src={src}></img>)

        top_element = img;
    }

    else if(type == "old") {
        const src = `/img/old/${name}.png`;
        const img = (<img className="project-detail-personal-game-img" src={src}></img>)

        top_element = img;
    }

    else {
        debugger;
    }

    return (
        <>
            <div className="proj-canvas-container">
                {top_element}
            </div>
        </>
    )
}