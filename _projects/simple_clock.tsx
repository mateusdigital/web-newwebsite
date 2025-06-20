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
            Simple Clock is a very basic clock that I created to learn the Canvas drawing API.
          </p>
        </section>
      </DemoPage_>
    </>
  )
}
