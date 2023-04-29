import DefaultPage_ from "@/components/default-page";

export default function Resume() {
  return (
    <>
      <DefaultPage_ page_id="resume">
        <div className="resumeIFrameContainer">

          <iframe src="html/resume.html"
            className="resumeIFrame"
            scrolling="no"
            frameborder="0"
            frameBorder="0"
            marginheight="0px"
            marginwidth="0px"
            allowfullscreen></iframe>
          {/* <iframe src="/html/resume.html" className="resumeIFrame" scrolling="no"></iframe> */}
        </div>
      </DefaultPage_>
    </>
  )
}
