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
            I thought that would be great to have a Gameboy
            frame for the <Link href="https://mateus.digital/el_jamon_volador">El Jamon Volador</Link> page,
            and I saw it as opportunity to start to get into making art with CSS.
          </p>

          <p>
            This is my very-first project and I'm very happy with it :)
          </p>
        </section>
      </DemoPage_>
    </>
  )
}
