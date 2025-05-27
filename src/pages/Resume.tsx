import DefaultPage from "../components/DefaultPage";
import Link from "../components/Link";

export default function Resume() {
  return (
    <>
      <DefaultPage pageId="resume">
        <h1>My <span>Resume</span></h1>
        <section>
          <p>
            I'm excited to hear from potential employers and explore how we can work together to achieve great things.
          </p>

          <p>
            I'm an active learner and I'm always looking for new challenges and opportunities to grow.<br />
            To this day I've obtained 150+ certificates in various areas of technology and game development.
            <br />
            <Link href="/certifications">Check my certificates</Link>
          </p>
        </section>

        <section>
          <p>
            My most up-to-date resume is shown bellow, but also you can <i class="fas fa-file-pdf"></i> <a href="/res/resume/mateus-mesquita-resume.pdf"> Download in PDF</a>.
          </p>

          <div className="resumeIFrameContainer">
            <iframe src="/html/resume.html" className="resumeIFrame"></iframe>
          </div>
        </section>
      </DefaultPage>
    </>
  )
}
