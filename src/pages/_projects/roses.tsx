import { Link }  from "../components/link";
import GetProjectPageInfo from "../components/project-detail-page/get-project-detail-page-info";
import DemoPage_ from "../components/project-detail-page/demo-page";

export default function Page() {
  const info = GetProjectPageInfo()
  return (
    <>
      <DemoPage_ info={info}>
        <section>
          <p>
            Roses was created in 2020 after I got interested in the patterns that can be created with the formulas.
          </p>

          <p>
            It was created with <Link href="">demolib</Link>, it's licensed as <Link href="">GPLv3</Link>.
          </p>
        </section>
      </DemoPage_>
    </>
  )
}
