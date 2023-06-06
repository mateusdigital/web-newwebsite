
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
            After my work at Stoic's Studio <Link_ href="./the_banner_saga">The Banner Saga</Link_>, I've invited to work in Killers and Thieves, a
            game that they would be publishing back then.
          </p>
          <p>
            I had improved and finalized game for publishing by adding features and fixing bugs.
            Also extensively work was done to optimize <b>Lua</b> and <b>Unity</b> interop code, implement UI features in Unity and game play features in Lua.
          </p>
          <p>
            Besides Implement <b>Steamworks API</b> integration I've implemented and refine AI algorithms for heists.
          </p>
        </section>
      </ProfessionalPage_>
    </>
  )
}
