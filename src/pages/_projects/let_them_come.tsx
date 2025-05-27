import GetProjectPageInfo from "../components/project-detail-page/get-project-detail-page-info";
import ProfessionalPage_ from "../components/project-detail-page/professional-page";

export default function Page() {
  const info = GetProjectPageInfo()
  return (
    <>
      <ProfessionalPage_ info={info}>
        <section>
          <p>
            In this project, I was responsible to integrate the <b>AlienFx SDK</b> to YoYo Games' <b>Game Maker</b>.
            The AlienFx SDK is written in C++ and provided as a DLL file, but it isn't readily usable in Game Maker.
            <br/>
            My job was to write a binding that maps more 1:1 possible the C++ in GML (the Game Maker scripting language).
            It was very challenging since I had no experience in Game Maker at all, but in the end, we managed to get it right.
          </p>
        </section>
      </ProfessionalPage_>
    </>
  )
}
