import { useState } from "react";
import Link_ from "@/components/link";

import GamesIcon_ from "@/components/icons/gamepad-solid";
import ProjectsIcon_ from "@/components/icons/layer-group-solid";
import ContactsIcon_ from "@/components/icons/comments-solid";
import ResumeIcon_ from "@/components/icons/scroll-solid";
import AboutIcon_ from "@/components/icons/address-card-solid";

export default function NavBar_({ page_id }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(o => !o);

  return (
    <>
      <nav className="topNav">
        <Link_ className="logo" href="/">mateus.digital</Link_>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>

        {menuOpen && (
          <div className="dropdownMenu">
            <div className="dropdownMenuItemsContainer" onClick={toggleMenu} >
            <Link_ className={`menuItem ${page_id === "games" ? "active" : ""}`} href="/games"><GamesIcon_ /><span>Games</span></Link_>
            <Link_ className={`menuItem ${page_id === "projects" ? "active" : ""}`} href="/projects"><ProjectsIcon_ /><span>Projects</span></Link_>
            <Link_ className={`menuItem ${page_id === "contacts" ? "active" : ""}`} href="/contacts"><ContactsIcon_ /><span>Contacts</span></Link_>
            <Link_ className={`menuItem ${page_id === "resume" ? "active" : ""}`} href="/resume"><ResumeIcon_ /><span>Resume</span></Link_>
            <Link_ className={`menuItem ${page_id === "about" ? "active" : ""}`} href="/about"><AboutIcon_ /><span>About</span></Link_>

            </div>
          </div>
        )}
      </nav>
    </>
  );
}
