import GetProjectPageInfo from "@/components/project-detail-page/get-project-detail-page-info";
import ProfessionalPage_ from "@/components/project-detail-page/professional-page";

export default function Page() {
  const info = GetProjectPageInfo()
  return (
    <>
      <ProfessionalPage_ info={info}>
        <section>
          <p>
            8 Ball Pool, the Miniclip's flagship game, thrives as a global online multiplayer game,
            gathering players for virtual pool matches.
          </p>

          <p>
              With 20+ programmers, the agile 8 Ball Pool team adeptly employs SCRUM,
              dividing into 3 groups: 2 for active development and 1 for bug fixes,
              refactoring, and performance enhancements.
          </p>

          <p>
            I've had the opportunity to work in both of the situations, helping
            with <b>performance improvements</b> and bug fixing and with the implementation
            of the <b>Season Pass</b> feature.
          </p>

          <p>
            Before join the mobile team, I have worked in the task-force porting the mobile client
            to the web using <b>Emscripten</b>.
          </p>
        </section>
      </ProfessionalPage_>
    </>
  )
}
