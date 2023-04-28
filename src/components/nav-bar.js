import Link_ from "@/components/link";
export default function NavBar_({ page_id }) {
  return (
    <>
      <nav className="topNav">
        <div className="topNavLogoContainer">
          <Link_ className="logo" href="/">mateus.digital</Link_>
        </div>

        <div className="topNavButtonsContainer">
          <Link_ className={`topNavButton ${page_id == "games"    ? "topNavButtonActive" : ""}`}  href="/games"><i className="fas fa-gamepad"></i><span>Games</span></Link_>
          <Link_ className={`topNavButton ${page_id == "projects" ? "topNavButtonActive" : ""}`}  href="/projects"><i className="fas fa-project-diagram"></i><span>Projects</span></Link_>
          <Link_ className={`topNavButton ${page_id == "blog"     ? "topNavButtonActive" : ""}`}  href="/blog"><i className="fas fa-blog"></i> <span>Blog</span></Link_>
          <Link_ className={`topNavButton ${page_id == "resume"   ? "topNavButtonActive" : ""}`}  href="/resume"><i className="fas fa-file-alt"></i> <span>Resume</span></Link_>
          <Link_ className={`topNavButton ${page_id == "about"    ? "topNavButtonActive" : ""}`}  href="/about"><i className="fas fa-user"></i> <span>About</span></Link_>

          {/* @todo as fa-caret-down, fa-chevron-down, and fa-angle-down.  */}
          <Link_ className="hamburger" href=""><i className="fas fa-bars"></i></Link_>
        </div>
      </nav>
    </>
  )
}
