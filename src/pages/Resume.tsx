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
        <section>
          <h1>My <span>Resume</span></h1>
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




        {/* <_Section title="" subtitle="Other past experience" columns="0">
          <ul>
            <span><b>Banco Pine</b></span>
            <li><span>Financial System Backend</span><span className="textDetail"> - Web</span></li>
            <br />

            <span><b>goEpik</b></span>
            <li><span>VR / AR for industry 4.0</span><span className="textDetail"> - Mobile</span></li>
            <br />

            <span><b>noping.com</b></span>
            <li><span>Network Tunneling</span><span className="textDetail"> - Windows</span></li>
            <br />

            <span><b>Ginga.One</b></span>
            <li><span>Pequenos Criativos</span><span className="textDetail"> - iOS</span></li>
            <li><span>Porto Seguro Auto</span><span className="textDetail"> - iOS</span></li>
            <br />

            <span><b>Imidiar</b></span>
            <li><span>Photo Totem</span><span className="textDetail"> - Python</span></li>
            <br />

            <span><b>GSM Sistemas</b></span>
            <li><span>Health analytics</span><span className="textDetail"> - iOS</span></li>
            <br />

            <span><b>Eazz</b></span><br/>
            <span>Metro Genius</span><span className="textDetail"> - Windows Phone</span><br/>
            <span>donkey.bas</span><span className="textDetail"> - Windows Phone</span><br/>
            <span>Pirates Treasure</span><span className="textDetail"> - Windows Phone</span><br/>
            <span>Tic Tac Toe</span><span className="textDetail"> - Windows Phone</span><br/>
          </ul> */}
        {/* </_Section> */}
      </DefaultPage>
    </>
  )
}

//
// Helpers
//

// -----------------------------------------------------------------------------
function _Section({ title, subtitle, columns, children }: any) {
  return (
    <section>
      <h1>{title} <span>{subtitle}</span></h1>
      <div className={"gridContainer" + columns}>
        {children}
      </div>
    </section>
  );
}
