// -----------------------------------------------------------------------------
import Link from "../components/link";
// -----------------------------------------------------------------------------
import GetProjectPageInfo from "../components/project-detail-page/get-project-detail-page-info";
import ProfessionalPage_ from "../components/project-detail-page/professional-page";

// -----------------------------------------------------------------------------
export default function Page() {
  const info = GetProjectPageInfo()
  return (<>
    <ProfessionalPage_ info={info}>
      <section>
        <p>
          I'm leading the development of <b>UniqKiller</b> at <Link href="https://hypejoe.com">HypeJoe Games</Link>.
        </p>

        <p>
         <b>Uniqkiller</b> is free-to-play, competitive and cross-play multiplayer shooter,
         with a top down camera developed in <b>Unreal Engine 5</b>.
        </p>
      </section>
    </ProfessionalPage_>
  </>)
}
