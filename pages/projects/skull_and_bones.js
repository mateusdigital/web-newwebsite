
import GetProjectPageInfo from "@/components/project-detail-page/get-project-detail-page-info";
import ProfessionalPage_ from "@/components/project-detail-page/professional-page";


export default function Page() {
  const info = GetProjectPageInfo()
  return (
    <>
      <ProfessionalPage_ info={info}>
        <section>
          <p>
            In 2020 I joined Ubisoft Kyiv as Senior Programmer. My job was to implement state-of-the-art <b>ACCESSIBILITY</b> solutions,
            which focused on <b>Text-to-Speech</b> and <b>Speech-to-Text</b>. <br/>
            I worked with a multi-studio effort involving Kyiv, Odessa, Berlin, and Belgrade.
          </p>

          <p>
            In this project I've the opportunity to work with <b>Anvil</b> (the same engine that powers Assasins Creed)
            and <b>Phoenix UI</b> (the UI engine that Rainbow Six uses).
          </p>
        </section>
      </ProfessionalPage_>
    </>
  )
}
