
import GetProjectPageInfo from "../components/project-detail-page/get-project-detail-page-info";
import ProfessionalPage_ from "../components/project-detail-page/professional-page";


export default function Page() {
  const info = GetProjectPageInfo()
  return (
    <>
      <ProfessionalPage_ info={info}>
        <section>
          <p>
            In 2020, I joined Ubisoft Kyiv as a Senior Programmer. My role was to implement cutting-edge <b>accessibility</b> solutions,
            focusing on <b>Text-to-Speech</b> and <b>Speech-to-Text</b> functionalities. I worked with a multi-studio effort involving Kyiv, Odessa, Berlin, and Belgrade.
          </p>

          <p>
            During this project, I had the opportunity to work extensively with <b>Anvil</b>, the same engine powering Assassin's Creed,
            as well as <b>Phoenix UI</b>, the UI engine behind Rainbow Six.
          </p>
        </section>
      </ProfessionalPage_ >
    </>
  )
}
