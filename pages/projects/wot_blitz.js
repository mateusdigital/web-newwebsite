import GetProjectPageInfo from "@/components/project-detail-page/get-project-detail-page-info";
import ProfessionalPage_ from "@/components/project-detail-page/professional-page";


export default function Page() {
  const info = GetProjectPageInfo()
  return (
    <>
      <ProfessionalPage_ info={info}>
        <section>
          <p>
            It is the studio's main game, Like a Boss is an Action RPG where
            you are the epic Raid Boss at the end of a dungeon, crushing
            players (the heroes) as they come to steal your treasures.
          </p>
          <p>
            As an additional programmer, I was responsible for numerous code
            refactoring, improvements, bug fixes, and other optimizations
            that are typically not available to the main team.

            I created custom <i>Editor Scripts</i> to ease some game development operations
          </p>
        </section>
      </ProfessionalPage_>
    </>
  )
}
