// -----------------------------------------------------------------------------
import Link_ from "@/components/link";
import DefaultPage_ from "@/components/default-page";
// -----------------------------------------------------------------------------
import packageJson from '../package.json';

// -----------------------------------------------------------------------------
const version = packageJson.version;
const build = packageJson.build;

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
  return (<>
    <DefaultPage_ title="Welcome to Mateus Mesquita's homepage" page_id="index">
      <div className="indexAsciiArtContainer">
        <pre className="indexAsciiArt" dangerouslySetInnerHTML={{ __html: HTML_TEXT }}></pre>
      </div>
    </DefaultPage_>
  </>);
}
