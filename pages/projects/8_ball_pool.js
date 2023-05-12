import GetProjectPageInfo from "@/components/project-detail-page/get-project-detail-page-info";
import ProfessionalPage_ from "@/components/project-detail-page/professional-page";

export default function Page() {
  const info = GetProjectPageInfo()
  return (
    <>
      <ProfessionalPage_ info={info}>
        <section>
          <p>
            8 Ball Pool is an online multiplayer game developed by Miniclip.
            It is played on a virtual pool table and allows players to compete against
            each other from around the world.
          </p>
          <p>
            It's the of Miniclip's main - 10 years on going - game, with the biggest team of 20+ programmers.
            With an agile mindset, the 8 Ball Pool team heavily uses SCRUM in the day routines.
          </p>
          <p>
            The whole team is further divided into 3 smaller groups, which wwo of them are focused into active development,
            while the third is responsible for bug-fixes, refactoring, performance improvements.
          </p>
          <p>
            The smaller teams rotate their roles - development x fixes - as per feature basis.
            So sometimes will be doing new feature development, sometimes will be helping
            to keep the tech dept in control.
          </p>
          <p>
            I've had the opportunity to work in both of the situations, helping
            with performance improvements and bug fixing and with the implementation
            of the <b>Season Pass</b> feature.
          </p>

          <p>
            Before join the mobile team, I have worked in the task-force porting the mobile client 
            to the web using Emscripten.
          </p>
        </section>
      </ProfessionalPage_>
    </>
  )
}
