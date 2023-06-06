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
            Similar to the <Link_ href="/projects/let_them_come">Let them Come</Link_> my work here
            was to create bindings to the <b>AlienFx SDK</b> in <b>Unity</b>, so the game developers would have
            access to it in the environment that they're used to.
          </p>
        </section>
      </ProfessionalPage_>
    </>
  )
}
