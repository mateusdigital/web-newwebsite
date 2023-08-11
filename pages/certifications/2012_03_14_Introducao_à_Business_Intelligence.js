
import DefaultPage_ from "@/components/default-page";
import Link_ from "@/components/link";

export default function Page() {
  return (
    <>
      <DefaultPage_ page_id="certifications">
        <a href="/res/certifications/MVA/2012_03_14_Introducao_à_Business_Intelligence-1.png">
          <img className="certificationDetailPageHeader" src="/res/certifications/MVA/2012_03_14_Introducao_à_Business_Intelligence-1.png"></img>
        </a>
        <section>
          <ul>
            <b>Links:</b><br />
            <li><b>PDF Version:</b> <Link_ href="/res/certifications/MVA/2012_03_14_Introdução_à_Business_Intelligence.pdf">Download</Link_></li>
          </ul>
        </section>
      </DefaultPage_>
    </>
  )
}
