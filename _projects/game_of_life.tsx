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
            Game of Life is an implementation of the classic <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Conway's Game of Life</a>.
          </p>

          <p>
            It was created with <Link href="">demolib</Link>, it's licensed as <Link href="">GPLv3</Link>.
          </p>
        </section>
      </DemoPage_>
    </>
  )
}
