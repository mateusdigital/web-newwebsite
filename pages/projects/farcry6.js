
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
            After working in <Link_ href="./skull_and_bones">Skull and Bones</Link_> I went to help the release of LOST BETWEEN WORLDS DLC. <br/>
            I was primally doing bug fixing for <i><b>A11Y</b></i> components. <br/>
            </p>
            <p>
            In this project I've worked with Ubisoft's <b>Dunia engine</b> and <b>Phoenix UI</b>.
          </p>
        </section>
      </ProfessionalPage_>
    </>
  )
}
