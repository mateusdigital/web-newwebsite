
import Link_ from "@/components/link";
import DefaultPage_ from "@/components/default-page";
import styles from './index.module.css';


export default function Index() {
  return (
    <>
      <DefaultPage_ title="Welcome to Mateus Mesquita's homepage" page_id="index">
        <div className={styles.heroContainer}>

          <div className={styles.indexDemoContainer}>
            <img className={styles.indexDemo} src="/img/planet.png"></img>
          </div>

          <h1>Mateus Mesquita</h1>
        </div>

        <div className={styles.indexContent}>
          <p>
            Hello, my name is Mateus Mesquita, and I am a creative developer currently living in my hometown, <a href="https://en.wikipedia.org/wiki/Santa_Rita_do_Sapuca%C3%AD">Santa Rita do Sapucaí</a> with my family.
          </p>

          <p>
            I'm enthusiastic about <b>FREE SOFTWARE</b> and <b>FREE CULTURE</b>.
          </p>

          <p>
            I have worked at&nbsp;
            <b>Ubisoft</b> <span className={styles.citySmallText}>(Kyiv)</span>,&nbsp;
            <b>Wargaming</b> <span className={styles.citySmallText}>(Minsk)</span>,&nbsp;
            <b>Miniclip</b> <span className={styles.citySmallText}>(Lisbon)</span>,&nbsp;
            <b>Firehorse</b> <span className={styles.citySmallText}>(Sao Paulo)</span>&nbsp;

            and others, working in projects such&nbsp;
            <Link_ href="">Skull and Bones</Link_>,&nbsp;
            <Link_ href="">Far Cry 6</Link_>,&nbsp;
            <Link_ href="">WoT Blitz</Link_>,&nbsp;
            <Link_ href="">pacman.io</Link_>,&nbsp;
            <Link_ href="">8 Ball Pool</Link_>,&nbsp;
            <Link_ href="">The Banner Saga</Link_>,&nbsp;
            <Link_ href="">Killers and Thieves</Link_> and more...
          </p>

          <p>
            I love retro-programming and co-created <a href="/games/the_mistral_report.html">The Mistral Report</a> for MSDOS,
            awarded at Retro Zaragozza 2018. Also I make some <Link_ href="">games</Link_> for the Nintendo Game Boy.
          </p>

          <p>
            Also I interested in <Link_ href="">creative-coding</Link_> and generative art. 
          </p>

          <p>
            Well, there a lot of stuff that I'd made! <br />
            If you want you can check all of them in the <a href="/games.html">GAMES</a>
            or <a href="/projects.html">PROJECTS</a> section.
          </p>

          <p>
            You can take a look at my <a href="/resume.html">RESUME</a>,
            check my code at <a href="https://gitlab.com/stdmatt">gitlab</a>
            find me at <a href="https://www.linkedin.com/in/stdmatt/">linkedin</a> or <a href="/contacts.html">contacts</a>
            or perhaps read my <a href="/blog.html">blog</a>.
          </p>

          <p>
            It's nice to see you here! <br />
            I hope that you enjoy ;D
          </p>
        </div>

      </DefaultPage_>
    </>
  )
}
