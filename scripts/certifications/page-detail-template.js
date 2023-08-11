
import DefaultPage_ from "@/components/default-page";
import Link_ from "@/components/link";

export default function Page() {
  return (
    <>
      <DefaultPage_ page_id="certifications">
        <a href="__header_img_url__">
          <img className="certificationDetailPageHeader" src="__header_img_url__"></img>
        </a>
        <section>
          <ul>
            <b>Links:</b><br />
            <li><b>PDF Version:</b> <Link_ href="__pdf_url__">Download</Link_></li>
          </ul>
        </section>
      </DefaultPage_>
    </>
  )
}
