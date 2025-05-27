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
            Much like my involvement with <Link href="/projects/let_them_come">Let them Come</Link>,
            my role in this project was creating bindings to the <b>AlienFx SDK</b> within the <b>Unity</b> environment.
            This initiative aimed to provide game developers with seamless access to the SDK's capabilities within their familiar development setting.
          </p>
        </section>
      </ProfessionalPage_>
    </>
  )
}
