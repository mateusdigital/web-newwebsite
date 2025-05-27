
import Link from "../components/link";
import GetProjectPageInfo from "../components/project-detail-page/get-project-detail-page-info";
import ProfessionalPage_ from "../components/project-detail-page/professional-page";


export default function Page() {
  const info = GetProjectPageInfo()
  return (
    <>
      <ProfessionalPage_ info={info}>
        <section>
          <p>
            Following my contributions to Stoic Studio's <Link href="./the_banner_saga">The Banner Saga</Link>,
            I received an invitation to join the team working on Killers and Thieves, a game they were
            preparing to publish at the time.
          </p>

          <p>
            I was responsible for enhancing and finalizing the game for publication by adding new
            features, rectifying bugs, and conducting significant optimization work on the <b>Lua</b> and <b>Unity</b> interop code.
          </p>

          <p>
            Additionally, I undertook the integration of the <b>Steamworks API</b> and refined AI algorithms for in-game heists.
          </p>
        </section>
      </ProfessionalPage_>
    </>
  )
}
