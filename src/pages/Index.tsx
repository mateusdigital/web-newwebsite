//----------------------------------------------------------------------------//
//                               *       +                                    //
//                         '                  |                               //
//                     ()    .-.,="``"=.    - o -                             //
//                           '=/_       \     |                               //
//                        *   |  '=._    |                                    //
//                             \     `=./`,        '                          //
//                          .   '=.__.=' `='      *                           //
//                 +                         +                                //
//                      O      *        '       .                             //
//                                                                            //
//  File      : index.js                                                      //
//  Project   : new-website                                                   //
//  Date      : 2023-03-07                                                    //
//  License   : See project's COPYING.TXT for full info.                      //
//  Author    : mateus.digital <hello@mateus.digital>                         //
//  Copyright : mateus.digital - 2023 - 2025                                  //
//                                                                            //
//  Description :                                                             //
//                                                                            //
//----------------------------------------------------------------------------//

// -----------------------------------------------------------------------------
import DefaultPage from "../components/DefaultPage";
// -----------------------------------------------------------------------------
// import packageJson from '@/package.json' assert { type: 'json' };
const packageJson = {
  version: "1.0.0",
  build: "2023-03-07"
}
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



//
// Component
//

// -----------------------------------------------------------------------------
export function Index() {
  return (<>
    <DefaultPage title="Welcome to Mateus Mesquita's homepage" pageId="index">
      <div className="indexAsciiArtContainer">
        {/* <pre className="indexAsciiArt" dangerouslySetInnerHTML={{ __html: HTML_TEXT }}></pre> */}
      </div>
    </DefaultPage>
  </>);
}

// -----------------------------------------------------------------------------
(Index as any).__location = import.meta.url;
export default Index;