
import DefaultPage_ from "@/components/default-page";
import Link_ from "@/components/link";

export default function Page() {
  return (
    <>
      <DefaultPage_ page_id="certifications">
        <a href="/res/certifications/MVA/2013_06_27_MVA_Live_Q_and_A_Programming_Windows_with_Charles_Petzold-1.png">
          <img className="certificationDetailPageHeader" src="/res/certifications/MVA/2013_06_27_MVA_Live_Q_and_A_Programming_Windows_with_Charles_Petzold-1.png"></img>
        </a>
        <section>
          <ul>
            <b>Links:</b><br />
            <li><b>PDF Version:</b> <Link_ href="/res/certifications/MVA/2013_06_27_MVA_Live_Q_and_A_Programming_Windows_with_Charles_Petzold.pdf">Download</Link_></li>
          </ul>
        </section>
      </DefaultPage_>
    </>
  )
}
