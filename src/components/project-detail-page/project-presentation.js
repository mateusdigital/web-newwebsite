import Script from "next/script";
import DemoCanvas_ from "../demo-canvas";
import PersonalGameCanvas_ from "../personal-game-canvas";

import YTVideo_ from "../yt-video";
import Image from "next/image"

export default function ProjectPresentation_({info}) {
    const type = info.type;

    let top_element = null;

    const name = info.name;
    // Professional
    if(type == "professional") {
        const video_id = info.youtube_video_id;
        top_element = YTVideo_({video_id});
    }

    // Demo
    else if (type == "demo") {
        top_element = DemoCanvas_({name});
    }

    // Personal / Old
    else if(type == "personal" || type == "old") {
        top_element = PersonalGameCanvas_({info})

    }

    // Invalid type...
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