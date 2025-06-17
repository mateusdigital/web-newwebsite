
import { DefaultPage } from  "../components/DefaultPage";
import Link from "../components/link";

export default function Page() {
  return (
    <>
      <DefaultPage pageId="certifications">
        <a href="__header_img_url__">
          <img className="certificationDetailPageHeader" src="__header_img_url__"></img>
        </a>
        <section>
          <ul>
            <b>Links:</b><br />
            <li><b>PDF Version:</b> <Link href="__pdf_url__">Download</Link></li>
          </ul>
        </section>
      </DefaultPage>
    </>
  )
}
