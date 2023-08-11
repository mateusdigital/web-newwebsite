
import DefaultPage_ from "@/components/default-page";
import Link_ from "@/components/link";

export default function Page() {
  return (
    <>
      <DefaultPage_ page_id="certifications">
        <a href="/res/certifications/MVA/2014_08_18_C_plus__plus__A_General_Purpose_Language_and_Library_Jump_Start-1.png">
          <img className="certificationDetailPageHeader" src="/res/certifications/MVA/2014_08_18_C_plus__plus__A_General_Purpose_Language_and_Library_Jump_Start-1.png"></img>
        </a>
        <section>
          <ul>
            <b>Links:</b><br />
            <li><b>PDF Version:</b> <Link_ href="/res/certifications/MVA/2014_08_18_C++_A_General_Purpose_Language_and_Library_Jump_Start.pdf">Download</Link_></li>
          </ul>
        </section>
      </DefaultPage_>
    </>
  )
}
