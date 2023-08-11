
import DefaultPage_ from "@/components/default-page";
import Link_ from "@/components/link";

export default function Page() {
  return (
    <>
      <DefaultPage_ page_id="certifications">
        <a href="/res/certifications/udemy/2015_02_28_Linux_Alternatives_to_Windows_Applications-1.png">
          <img className="certificationDetailPageHeader" src="/res/certifications/udemy/2015_02_28_Linux_Alternatives_to_Windows_Applications-1.png"></img>
        </a>
        <section>
          <ul>
            <b>Links:</b><br />
            <li><b>PDF Version:</b> <Link_ href="/res/certifications/udemy/2015_02_28_Linux_Alternatives_to_Windows_Applications.pdf">Download</Link_></li>
          </ul>
        </section>
      </DefaultPage_>
    </>
  )
}
