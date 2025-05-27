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
          Fortnite is a <b>free-to-play</b> battle royale game developed and published by <b>Epic Games</b>.
        </p>

        <p>
          I've worked as <b>Senior UI Programmer</b>, creating MVVM modules for the UI system.
        </p>
      </section>
    </ProfessionalPage_>
  </>)
}
