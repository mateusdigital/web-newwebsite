//----------------------------------------------------------------------------//
//                               *       +                                    //
//                         '                  |                               //
//                     ()    .-.,="``"=.    - o -                             //
//                           '=/_       \     |                               //
//                        *   |  '=._    |                                    //
//                             \     `=./`,        '                          //
//                          .   '=.__.=' `='      *                           //
//                 +                         +                                //
//                      O      *        '       .                             //
//                                                                            //
//  File      : Resume.tsx                                                    //
//  Project   : new-website                                                   //
//  Date      : 2025-05-26                                                    //
//  License   : See project's COPYING.TXT for full info.                      //
//  Author    : mateus.digital <hello@mateus.digital>                         //
//  Copyright : mateus.digital - 2025                                         //
//                                                                            //
//  Description :                                                             //
//                                                                            //
//----------------------------------------------------------------------------//

// -----------------------------------------------------------------------------
import { Link } from "../components/Link";
import { DefaultPage } from "../components/DefaultPage";


//
// Component
//

// -----------------------------------------------------------------------------
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
            <br />
            - <Link href="/certifications">Check my certificates</Link>!!
          </p>
        </section>

        <section>
          <p>
            My most up-to-date resume is shown bellow, but also you can <a href="/res/resume/mateus-mesquita-resume.pdf">Download in PDF</a> or <a href="/res/resume/mateus-mesquita-resume.pdf">Open in New Page</a>.
          </p>

          <div className="resumeIFrameContainer">
            <iframe src="/html/resume.html" className="resumeIFrame"></iframe>
          </div>
        </section>
      </DefaultPage>
    </>
  )
}
