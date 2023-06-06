import GetProjectPageInfo from "@/components/project-detail-page/get-project-detail-page-info";
import ProfessionalPage_ from "@/components/project-detail-page/professional-page";


export default function Page() {
  const info = GetProjectPageInfo()
  return (
    <>
      <ProfessionalPage_ info={info}>
        <section>
          <p>
            I went to Minsk, Belarus to join the World of Tanks - Blitz team in 2019.
          </p>

          <p>
            Working with <b>Unreal Engine 4</b>, I was responsible for the implementation of UI
            using <b>UE4 UMG</b> system and also have worked in game play elements for the, then, new
            game modes.
          </p>
        </section>
      </ProfessionalPage_>
    </>
  )
}
