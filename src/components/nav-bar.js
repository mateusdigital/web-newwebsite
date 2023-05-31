import Link_ from "@/components/link";

import GamesIcon_    from "@/components/icons/gamepad-solid";
import ProjectsIcon_ from "@/components/icons/layer-group-solid";
import ContactsIcon_ from "@/components/icons/comments-solid";
import ResumeIcon_   from "@/components/icons/scroll-solid";
import AboutIcon_    from "@/components/icons/address-card-solid";

export default function NavBar_({ page_id }) {
  return (
    <>
      <nav className="topNav">
        <div className="topNavLogoContainer">
          <Link_ className="topNavLogo" href="/">mateus.digital</Link_>
        </div>

        <div className="topNavButtonsContainer">
          <Link_ className={`topNavButton ${page_id == "games"    ? "topNavButtonActive" : ""}`}  href="/games"><GamesIcon_/><span>Games</span></Link_>
          <Link_ className={`topNavButton ${page_id == "projects" ? "topNavButtonActive" : ""}`}  href="/projects"><ProjectsIcon_/><span>Projects</span></Link_>
          <Link_ className={`topNavButton ${page_id == "contacts" ? "topNavButtonActive" : ""}`}  href="/contacts"><ContactsIcon_/><span>Contacts</span></Link_>
          <Link_ className={`topNavButton ${page_id == "resume"   ? "topNavButtonActive" : ""}`}  href="/resume"><ResumeIcon_/><span>Resume</span></Link_>
          <Link_ className={`topNavButton ${page_id == "about"    ? "topNavButtonActive" : ""}`}  href="/about"><AboutIcon_/><span>About</span></Link_>

          {/* @todo as fa-caret-down, fa-chevron-down, and fa-angle-down.  */}
          {/* <Link_ className="hamburger" href=""><i className="fas fa-bars"></Link_> */}
        </div>
      </nav>
    </>
  )
}
