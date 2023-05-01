import Link_ from "@/components/link";
import DefaultPage_ from "@/components/default-page";


const ASCII_ART = [
  "                                            ,o88888",
  "                                       ,o8888888'",
  "                 ,:o:o:oooo.        ,8O88Pd8888\"",
  "             ,.::.::o:ooooOoOoO. ,oO8O8Pd888'\"",
  "           ,.:.::o:ooOoOoOO8O8OOo.8OOPd8O8O\"",
  "          , ..:.::o:ooOoOOOO8OOOOo.FdO8O8\"",
  "         , ..:.::o:ooOoOO8O888O8O,COCOO\"",
  "        , . ..:.::o:ooOoOOOO8OOOOCOCO\"",
  "         . ..:.::o:ooOoOoOO8O8OCCCC\"o",
  "            . ..:.::o:ooooOoCoCCC\"o:o",
  "            . ..:.::o:o:,cooooCo\"oo:o:",
  "         `   . . ..:.:cocoooo\"'o:o:::'",
  "         .`   . ..::ccccoc\"'o:o:o:::'",
  "        :.:.    ,c:cccc\"':.:.:.:.:.'",
  "      ..:.:\"'`::::c:\"'..:.:.:.:.:.'",
  "    ...:.'.:.::::\"'    . . . . .'",
  "   .. . ....:.\"' `   .  . . ''",
  " . . . ....\"'",
  " .. . .\"'     -hrr-",
  ".",
].join("<br/>");

const HTML_TEXT = `<pre>${ASCII_ART}</pre>`;

export default function Index() {
  return (
    <>
      <DefaultPage_ title="Welcome to Mateus Mesquita's homepage" page_id="index">
        <div className="indexAsciiArtContainer">
          <pre className="indexAsciiArt" dangerouslySetInnerHTML={{ __html: ASCII_ART }}></pre>
        </div>

        <h1>Mateus Mesquita</h1>
        <section>
          <p>
            Hello, my name is <b>Mateus Mesquita</b>, and I am a creative developer currently living in my hometown, <Link_ href="https://en.wikipedia.org/wiki/Santa_Rita_do_Sapuca%C3%AD">Santa Rita do Sapucaí</Link_> with my family.
          </p>

          <p>
            I'm enthusiastic about <b>FREE SOFTWARE</b>, <b>FREE CULTURE</b> and <b>Accessibility</b>.
          </p>

          <p>
            I have worked at&nbsp;
            <b>Ubisoft</b> <span className="textDetail">(Kyiv)</span>,&nbsp;
            <b>Wargaming</b> <span className="textDetail">(Minsk)</span>,&nbsp;
            <b>Miniclip</b> <span className="textDetail">(Lisbon)</span>,&nbsp;
            <b>Firehorse</b> <span className="textDetail">(Sao Paulo)</span> and others, working in projects such&nbsp;
            <Link_ href="">Skull and Bones</Link_>,&nbsp;
            <Link_ href="">Far Cry 6</Link_>,&nbsp;
            <Link_ href="">WoT Blitz</Link_>,&nbsp;
            <Link_ href="">pacman.io</Link_>,&nbsp;
            <Link_ href="">8 Ball Pool</Link_>,&nbsp;
            <Link_ href="">The Banner Saga</Link_>,&nbsp;
            <Link_ href="">Killers and Thieves</Link_> and more...
          </p>

          <p>
            I love retro-programming and co-created <Link_ href="/games/the_mistral_report.html">The Mistral Report</Link_> for MSDOS,
            awarded 🥇 at Retro Zaragozza 2018. Also I make some <Link_ href="">GAMES</Link_> for the Nintendo Game Boy.
          </p>

          <p>
            Also I'm interested in <Link_ href="">CREATIVE-CODING</Link_> and generative art.
          </p>

          <p>
            Well, there a lot of stuff that I've made! <br />
            If you want you can check all of them in the <Link_ href="/games.html">GAMES</Link_> or <Link_ href="/projects.html">PROJECTS</Link_> section.
          </p>

          <p>
            You can take a look at my <Link_ href="/resume.html">RESUME</Link_>,
            check my code at <Link_ href="https://gitlab.com/stdmatt">GITHUB</Link_> connect with me
            at <Link_ href="https://www.linkedin.com/in/stdmatt/">Linkedin</Link_>,
            check my <Link_ href="/contacts.html">CONTACTS</Link_> or
            perhaps read my <Link_ href="/blog.html">BLOG</Link_>.
          </p>

          <p>
            It's nice to see you here! <br />
            I hope that you enjoy ;D
          </p>
        </section>

      </DefaultPage_>
    </>
  )
}
