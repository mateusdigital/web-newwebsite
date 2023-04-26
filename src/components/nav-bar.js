import Link_ from "@/components/link";

import styles from './nav-bar.module.css';

export default function NavBar_({ page_id }) {
  return (
    <>
      {/* ------------------------------------------------------------ */}

      <nav className={styles.topNav}>
        <div className={styles.topNavLogoContainer}>
          <Link_ className="logo" href="/">mateus.digital</Link_>
        </div>

        <div className={styles.topNavButtonsContainer}>
          <Link_ className={styles.button} active={"games" == page_id} href="/games"><i class="fas fa-gamepad"></i><span>Games</span></Link_>
          <Link_ className={styles.button} active={"projects" == page_id} href="/projects"><i class="fas fa-project-diagram"></i><span>Projects</span></Link_>
          <Link_ className={styles.button} active={"blog" == page_id} href="/blog"><i class="fas fa-blog"></i> <span>Blog</span></Link_>
          <Link_ className={styles.button} active={"resume" == page_id} href="/resume"><i class="fas fa-file-alt"></i> <span>Resume</span></Link_>
          <Link_ className={styles.button} active={"about" == page_id} href="/about"><i class="fas fa-user"></i> <span>About</span></Link_>

          {/*  as fa-caret-down, fa-chevron-down, and fa-angle-down.  */}
          <Link_ className="hamburger" href=""><i class="fas fa-bars"></i></Link_>
        </div>
      </nav>
    </>
  )
}
