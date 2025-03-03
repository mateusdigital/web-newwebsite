// -----------------------------------------------------------------------------
import Link_ from "@/components/link";
// -----------------------------------------------------------------------------
import GetProjectPageInfo from "@/components/project-detail-page/get-project-detail-page-info";
import ProfessionalPage_ from "@/components/project-detail-page/professional-page";

// -----------------------------------------------------------------------------
export default function Page() {
  const info = GetProjectPageInfo()
  return (<>
    <ProfessionalPage_ info={info}>
      <section>
        <p>
          <b>Warframe</b> is a free-to-play cooperative third-person shooter video game developed and published by Digital Extremes.
        </p>

        <p>
          I was part of the <b>Warframe</b> initial porting team to <b>mobile platforms</b>.
          My core responsibility was get <b>Evolution Engine</b> <span className="textDetail">(their proprietary engine)</span> building and running both to <b>iOS</b> and <b>Android</b>.</p>
      </section>
    </ProfessionalPage_>
  </>)
}
