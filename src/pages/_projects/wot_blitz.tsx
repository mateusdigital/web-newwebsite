import GetProjectPageInfo from "../components/project-detail-page/get-project-detail-page-info";
import ProfessionalPage_ from "../components/project-detail-page/professional-page";


export default function Page() {
  const info = GetProjectPageInfo()
  return (
    <>
      <ProfessionalPage_ info={info}>
        <section>
          <section>
            <p>
              In 2019, I embarked on a journey to Minsk, Belarus, to join the World of Tanks - Blitz team.
            </p>

          <p>
              Working with <b>Unreal Engine 4</b>, I was involved in implementing user interfaces using UE4's <b>UMG</b> system.
              Additionally, I contributed to the development of gameplay elements for the then-new game modes.
          </p>
          </section>
        </section>
      </ProfessionalPage_>
    </>
  )
}
