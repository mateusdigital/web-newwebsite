
import DefaultPage_ from "@/components/default-page";
import Link_ from "@/components/link";

export default function Page() {
  return (
    <>
      <DefaultPage_ page_id="certifications">
        <a href="/res/certifications/MVA/2014_08_13_MVA_Live_Q_and_A_Microsoft_Virtualization-1.png">
          <img className="certificationDetailPageHeader" src="/res/certifications/MVA/2014_08_13_MVA_Live_Q_and_A_Microsoft_Virtualization-1.png"></img>
        </a>
        <section>
          <ul>
            <b>Links:</b><br />
            <li><b>PDF Version:</b> <Link_ href="/res/certifications/MVA/2014_08_13_MVA_Live_Q__pdf_url__A_Microsoft_Virtualization.pdf">Download</Link_></li>
          </ul>
        </section>
      </DefaultPage_>
    </>
  )
}
