import Link from "../components/link";
import GetProjectPageInfo from "../components/project-detail-page/get-project-detail-page-info";
import DemoPage_ from "../components/project-detail-page/demo-page";

export default function Page() {
  const info = GetProjectPageInfo()
  return (
    <>
      <DemoPage_ info={info}>
        <section>
          <p>
            DOOM FIRE! is a creative experience inspired by the <a href="https://fabiensanglard.net/doom_fire_psx/index.html">amazing blog post</a> of <a href="https://fabiensanglard.net/about/index.html">Fabian Sanglard</a>.
          </p>

          <p>
            It was created with <Link href="">demolib</Link>, it's licensed as <Link href="">GPLv3</Link>.
          </p>
        </section>
      </DemoPage_>
    </>
  )
}
