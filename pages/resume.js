import DefaultPage_ from "@/components/default-page";

export default function Resume() {
  return (
    <>

      <DefaultPage_ page_id="resume">
        <h1>My <span>Resume</span></h1>
        <section>
          <p>
            I'm excited to hear from potential employers and explore how we can work together to achieve great things.
          </p>

          <p>
            My most up-to-date resume is shown bellow, but also you can <i class="fas fa-file-pdf"></i> <a href="/res/resume/mateus-mesquita-resume.pdf"> Download in PDF</a>.
          </p>

          <hr />
          <br />
          <div className="resumeIFrameContainer">
            <iframe src="html/resume.html" className="resumeIFrame"></iframe>
          </div>
        </section>


      </DefaultPage_>
    </>
  )
}
