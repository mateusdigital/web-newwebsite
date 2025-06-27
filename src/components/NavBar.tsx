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
//  File      : NavBar.tsx                                                    //
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

// -----------------------------------------------------------------------------
import GamesIcon_ from "./icons/gamepad-solid";
import ProjectsIcon_ from "./icons/layer-group-solid";
import ContactsIcon_ from "./icons/comments-solid";
import ResumeIcon_ from "./icons/scroll-solid";
import AboutIcon_ from "./icons/address-card-solid";


//
// Component
//

// -----------------------------------------------------------------------------
type NavBarProps = {
  pageId: string;
};

export default function NavBar({ pageId }: NavBarProps) {
  return (<>
    <div className="navBarContainer" id={pageId}>
      <nav className="topNav">
        <Link className="logo" href="/">mateus.digital</Link>

        <div id="navBarMenu" className="navBarMenu">
          <button id="navBarButton" className="">
            ☰
          </button>
        </div>

        {/*  */}
        <div id="dropdownMenu" className="dropdownMenu">
          <div className="dropdownMenuContainer">
            <button id="dropdownButton" className="hamburger">
              X
            </button>

            <div className="dropdownMenuItemsContainer">
              <Link href="/games"><span>Games</span></Link>
              <Link href="/projects"><span>Projects</span></Link>
              <Link href="/software"><span>Software</span></Link>
              <Link href="/contacts"><span>Contacts</span></Link>
              <Link href="/resume"><span>Resume</span></Link>
              <Link href="/certifications"><span>Certifications</span></Link>
              <Link href="/about"><span>About</span></Link>
            </div>
          </div>
        </div>
      </nav>

      <hr></hr>
    </div>
  </>
  );
}