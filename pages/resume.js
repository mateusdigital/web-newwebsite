import DefaultPage_ from "@/components/default-page";

export default function Resume() {
  return (
    <>
      <DefaultPage_ page_id="resume">
        <div className="resumeIFrameContainer">
          <iframe src="html/resume.html" className="resumeIFrame"></iframe>
        </div>
      </DefaultPage_>
    </>
  )
}
