
import GetProjectPageInfo from "@/components/project-detail-page/get-project-detail-page-info";
import ProfessionalPage_ from "@/components/project-detail-page/professional-page";


export default function Page() {
  const info = GetProjectPageInfo()
  return (
    <>
      <ProfessionalPage_ info={info}>
        <section>
          <p>
            After my work at Stoic's Studio The Banner Saga, I've invited to work in Killers and Thieves, a
            game that they would be publishing.
          </p>
          <p>
            I had improved game for publishing by adding features and fixing bugs.
            Also extensively work was done to optimize Lua and Unity interop code, implement UI features in Unity and game play features in Lua.
          </p>
          <p>
            Besides Implement Steamworks API integration I've implemented and refine AI algorithms for heists.
          </p>
        </section>
      </ProfessionalPage_>
    </>
  )
}
