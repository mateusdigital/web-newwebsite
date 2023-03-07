
import Link_ from "@/components/link";

export default function Nav_() {
  return (
    <>
    <nav>
        <div>
            <Link_ href="/">mateus-earth</Link_>
        </div>
        <div>
            <Link_ href="/games">Games</Link_>
            <Link_ href="/projects">Projects</Link_>
            <Link_ href="/blog">Blog</Link_>
            <Link_ href="/resume">Resume</Link_>
            <Link_ href="/about" >About</Link_>
        </div>
    </nav>

        {/* <nav>
            <a className="left" href="games">Work</a>
            <a className="left" href="contacts">Collections</a>
            <a className="left" href="blog">Liked Shots</a>

            <a className="right" href="about">About</a>
            <a className="right" href="resume">Resume</a>
        </nav> */}

        {/* <div>

            <a className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" href="javascript:void(0)"
                onclick="handleNavBarToggle()">&#9776;
            </a>
        </div> */}

        {/* <div id="demo" className="w3-bar-block w3-hide w3-hide-large w3-hide-medium">
            <a className="w3-bar-item w3-button" href="about">About</a>
            <a className="w3-bar-item w3-button" href="contacts">Contacts</a>
            <a className="w3-bar-item w3-button" href="resume">Resume</a>
            <a className="w3-bar-item w3-button" href="games">Games</a>
            <a className="w3-bar-item w3-button" href="projects">Projects</a>
            <a className="w3-bar-item w3-button" href="https://github.com">Github</a>
            <a className="w3-bar-item w3-button" href="blog">Blog</a>
        </div> */}
    </>
  )
}
