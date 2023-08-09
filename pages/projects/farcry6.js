
import Link_ from "@/components/link";
import GetProjectPageInfo from "@/components/project-detail-page/get-project-detail-page-info";
import ProfessionalPage_ from "@/components/project-detail-page/professional-page";

export default function Page() {
  const info = GetProjectPageInfo()
  return (
    <>
      <ProfessionalPage_ info={info}>
        <section>
          <p>
            After contributing to the development of '<Link_ href="./skull_and_bones">Skull and Bones</Link_>'
            I moved to the Far Cry 6 team to aid the release of the '<b>LOST BETWEEN WORLDS'</b> DLC.
          </p>

          <p>
            My primary responsibilities involved addressing bugs within <b>A11Y</b> components,
            ensuring accessibility standards were met.
          </p>
          <p>
            Throughout this project, I had the opportunity to collaborate
            with <b>Dunia</b> engine and <b>Phoenix UI</b> framework.

          </p>
        </section>
      </ProfessionalPage_>
    </>
  )
}
