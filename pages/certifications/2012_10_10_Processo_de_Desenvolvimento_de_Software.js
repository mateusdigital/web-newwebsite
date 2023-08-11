
import DefaultPage_ from "@/components/default-page";
import Link_ from "@/components/link";

export default function Page() {
  return (
    <>
      <DefaultPage_ page_id="certifications">
        <a href="/res/certifications/Bradesco/2012_10_10_Processo_de_Desenvolvimento_de_Software-1.png">
          <img className="certificationDetailPageHeader" src="/res/certifications/Bradesco/2012_10_10_Processo_de_Desenvolvimento_de_Software-1.png"></img>
        </a>
        <section>
          <ul>
            <b>Links:</b><br />
            <li><b>PDF Version:</b> <Link_ href="/res/certifications/Bradesco/2012_10_10_Processo_de_Desenvolvimento_de_Software.pdf">Download</Link_></li>
          </ul>
        </section>
      </DefaultPage_>
    </>
  )
}
