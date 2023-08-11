
import DefaultPage_ from "@/components/default-page";
import Link_ from "@/components/link";

export default function Page() {
  return (
    <>
      <DefaultPage_ page_id="certifications">
        <a href="/res/certifications/MVA/2012_10_23_Windows_8_-_Sua_primeira_App_na_Windows_Store-1.png">
          <img className="certificationDetailPageHeader" src="/res/certifications/MVA/2012_10_23_Windows_8_-_Sua_primeira_App_na_Windows_Store-1.png"></img>
        </a>
        <section>
          <ul>
            <b>Links:</b><br />
            <li><b>PDF Version:</b> <Link_ href="/res/certifications/MVA/2012_10_23_Windows_8_-_Sua_primeira_App_na_Windows_Store.pdf">Download</Link_></li>
          </ul>
        </section>
      </DefaultPage_>
    </>
  )
}
