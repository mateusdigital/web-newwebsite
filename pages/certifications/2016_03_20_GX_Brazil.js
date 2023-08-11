
import DefaultPage_ from "@/components/default-page";
import Link_ from "@/components/link";

export default function Page() {
  return (
    <>
      <DefaultPage_ page_id="certifications">
        <a href="/res/certifications/GXBrazil/2016_03_20_GX_Brazil-1.png">
          <img className="certificationDetailPageHeader" src="/res/certifications/GXBrazil/2016_03_20_GX_Brazil-1.png"></img>
        </a>
        <section>
          <ul>
            <b>Links:</b><br />
            <li><b>PDF Version:</b> <Link_ href="/res/certifications/GXBrazil/2016_03_20_GX_Brazil.pdf">Download</Link_></li>
          </ul>
        </section>
      </DefaultPage_>
    </>
  )
}
