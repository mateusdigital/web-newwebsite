import DefaultPage_ from "@/components/default-page";
import Link_ from "@/components/link";

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
            I'm an active learner and I'm always looking for new challenges and opportunities to grow.
            To this day I've obtained 150+ certificates in various areas of technology and game development.

            <br />
            <Link_ href="/certifications">Check my certificates</Link_>
          </p>

          <p>
            My most up-to-date resume is shown bellow, but also you can <i class="fas fa-file-pdf"></i> <a href="/res/resume/mateus-mesquita-resume.pdf"> Download in PDF</a>.
          </p>

          <hr />
          <br />
          <div className="resumeIFrameContainer">
            <iframe src="/html/resume.html" className="resumeIFrame"></iframe>
          </div>
        </section>


      </DefaultPage_>
    </>
  )
}
