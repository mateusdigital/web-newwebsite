
import DefaultPage_ from "@/components/default-page";
import Link_ from "@/components/link";

export default function Page() {
  return (
    <>
      <DefaultPage_ page_id="certifications">
        <a href="/res/certifications/Coursera/2014_04_23_Exploring_Beethovens_Piano_Sonatas-1.png">
          <img className="certificationDetailPageHeader" src="/res/certifications/Coursera/2014_04_23_Exploring_Beethovens_Piano_Sonatas-1.png"></img>
        </a>
        <section>
          <ul>
            <b>Links:</b><br />
            <li><b>PDF Version:</b> <Link_ href="/res/certifications/Coursera/2014_04_23_Exploring_Beethovens_Piano_Sonatas.pdf">Download</Link_></li>
          </ul>
        </section>
      </DefaultPage_>
    </>
  )
}
