// -----------------------------------------------------------------------------
import Link_ from "@/components/link";
import DefaultPage_ from "@/components/default-page";
// -----------------------------------------------------------------------------
import packageJson from '../package.json';

// -----------------------------------------------------------------------------
const version = packageJson.version;
const build   = packageJson.build;

// -----------------------------------------------------------------------------
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
  " .. . .\"'           " + `${version} - ${build}`,
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
            Hello, my name is <b>Mateus Mesquita</b>, and I am a creative developer currently living in Brasil.
          </p>

          <p>
            Currently, I'm a <b>Tech Lead</b> at <Link_ href="https://hypejoe.com"><b>HypeJoe Games</b></Link_> leading
            the development of <Link_ href="/projects/uniqkiller">UniqKiller</Link_>,
            I'm also an Epic's <Link_ href="https://forums.unrealengine.com/t/how-does-one-obtain-access-to-udn-unrealengine-com/334708">UDN Partner</Link_>.
          </p>

          <p>
            With over <b>10 years in game development</b>, I have contributed to major projects at&nbsp;
            <b>Epic Games</b> <span className="textDetail">(Remote)</span>,&nbsp;
            <b>Ubisoft</b> <span className="textDetail">(Kyiv)</span>,&nbsp;
            <b>Wargaming</b> <span className="textDetail">(Minsk)</span>,&nbsp;
            <b>Miniclip</b> <span className="textDetail">(Lisbon)</span>,&nbsp;
            <b>Firehorse</b> <span className="textDetail">(Sao Paulo)</span> and others, working in projects such&nbsp;
            <Link_ href="/projects/fortnite">Fortnite</Link_>,&nbsp;
            <Link_ href="/projects/skull_and_bones">Skull and Bones</Link_>,&nbsp;
            <Link_ href="/projects/farcry6">Far Cry 6</Link_>,&nbsp;
            <Link_ href="/projects/wot_blitz">WoT Blitz</Link_>,&nbsp;
            <Link_ href="/projects/wot_blitz">Warframe</Link_>,&nbsp;
            <Link_ href="/projects/pacman_io">PacMan.io</Link_>,&nbsp;
            <Link_ href="/projects/8_ball_pool">8 Ball Pool</Link_>,&nbsp;
            <Link_ href="/projects/the_banner_saga">The Banner Saga</Link_>,&nbsp;
            <Link_ href="/projects/killers_and_thieves">Killers and Thieves</Link_> and more...
          </p>

          <p>
            I love retro-programming - Co-created <Link_ href="/projects/the_mistral_report">The Mistral Report</Link_> for MS-DOS
            <span className="textDetail"> (🥇 at Retro Zaragozza 2018)</span> and also
            the <Link_ href="/projects/el_jamon_volador">El Jamon Volador</Link_> for the Nintendo Game Boy.

          </p>

          <p>
            I make small, but yet complete, clone games releasing them
            at <Link_ href="https://mateusdigital.itch.io">mateusdigital.itch.io</Link_>
            <br/>
            Also I'm interested in <Link_ href="/projects">creative coding</Link_> and generative art.
          </p>

          <p>
            I've participated in some talks and about game dev and career development, you can check them at:
            <br />

            <li>
              <Link_
                className="mediaTalkContainer"
                href="https://www.youtube.com/watch?v=diSLvMutYH0"
              >
                {/*<img src="https://img.youtube.com/vi/diSLvMutYH0/default.jpg"/>*/}
                <span>CTRL ALT - Tudo Sobre Unreal Engine #1</span>&nbsp;
                <span className="textDetail">(Youtube)</span>
              </Link_>
            </li>

            <li>
              <Link_
                className="mediaTalkContainer"
                href="https://www.youtube.com/watch?v=InM81C0S65E"
              >
                {/*<img src="https://img.youtube.com/vi/InM81C0S65E/default.jpg"/>*/}
                <span>CTRL ALT - Tudo Sobre Unreal Engine #2</span>&nbsp;
                <span className="textDetail">(Youtube)</span>
              </Link_>
            </li>

            <li>
              <Link_
                className="mediaTalkContainer"
                href="https://www.youtube.com/watch?v=zKkm6iGo5uE"
              >
                {/*<img src="https://img.youtube.com/vi/zKkm6iGo5uE/default.jpg"/>*/}
                <span>GDTK - Bate Papo Game Dev</span>&nbsp;
                <span className="textDetail">(Youtube)</span>
              </Link_>
            </li>

            <li>
              <Link_
                className="mediaTalkContainer"
                href="https://www.carreirasemfronteiras.com.br/desenvolvedor-de-jogos-em-minsk-belarus-carreira-sem-fronteiras-86"
              >
                <span>Carreiras Sem Fronteiras #86 - Desenvolvedor de Jogos em Minsk, Belarus</span>&nbsp;
                <span className="textDetail">(Podcast)</span>
              </Link_>
            </li>
          </p>


          <p>
            Well, there a lot of stuff that I've made! <br />
            If you want you can check all of them in the <Link_ href="/games">GAMES</Link_> or <Link_
              href="/projects"
            >PROJECTS</Link_> section.
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
  );
}
