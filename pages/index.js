const version = "1.0.0";
const build = 5;

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
  " .. . .\"'     -hrr-" + `${version} - ${build}`,
  ".",
].join("<br/>");

const HTML_TEXT = `<pre>${ASCII_ART}</pre>`;

export default function Index() {
  return (
    <>
      <DefaultPage_ title="Welcome to Mateus Mesquita's homepage" page_id="index">
        <div className="indexAsciiArtContainer">
          <pre className="indexAsciiArt" dangerouslySetInnerHTML={{ __html: HTML_TEXT }}></pre>
        </div>

        <h1>Mateus Mesquita</h1>
        <section>
          <p>
            Hello, my name is <b>Mateus Mesquita</b>, and I am a creative developer currently 
            living in my hometown, <Link_ href="https://en.wikipedia.org/wiki/Santa_Rita_do_Sapuca%C3%AD">Santa Rita do Sapucaí</Link_> with 
            my family.
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
            <Link_ href="/projects/skull_and_bones">Skull and Bones</Link_>,&nbsp;
            <Link_ href="/projects/farcry6">Far Cry 6</Link_>,&nbsp;
            <Link_ href="/projects/wot_blitz">WoT Blitz</Link_>,&nbsp;
            <Link_ href="/projects/pacman_io">pacman.io</Link_>,&nbsp;
            <Link_ href="/projects/8_ball_pool">8 Ball Pool</Link_>,&nbsp;
            <Link_ href="/projects/the_banner_saga">The Banner Saga</Link_>,&nbsp;
            <Link_ href="/projects/killers_and_thieves">Killers and Thieves</Link_> and more...
          </p>

          <p>
            I love retro-programming and co-created <Link_ href="/projects/the_mistral_report">The Mistral Report</Link_> for MSDOS,
            awarded 🥇 at Retro Zaragozza 2018. <br/>
            Also I make some <Link_ href="/projects/el_jamon_volador">GAMES</Link_> for the Nintendo Game Boy.
          </p>

          <p>
            Also I'm interested in <Link_ href="/projects">CREATIVE-CODING</Link_> and generative art.
          </p>

          <p>
            Well, there a lot of stuff that I've made! <br />
            If you want you can check all of them in the <Link_ href="/games">GAMES</Link_> or <Link_ href="/projects">PROJECTS</Link_> section.
          </p>

          <p>
            You can take a look at my <Link_ href="/resume">RESUME</Link_>,
            check my code at <Link_ href="https://github.com/mateusdigital">GITHUB</Link_> connect with me
            at <Link_ href="https://www.linkedin.com/in/mateusdigital/">Linkedin</Link_>,
            check my <Link_ href="/contacts">CONTACTS</Link_> or
            perhaps read my <Link_ href="/blog">BLOG</Link_>.
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
