
import DefaultPage_ from "@/components/default-page";
import Link_ from "@/components/link";

export default function Page() {
  return (
    <>
      <DefaultPage_ page_id="certifications">
        <a href="/res/certifications/MVA/2017_08_25_Getting_Started_with_Visual_Studio_2017-1.png">
          <img className="certificationDetailPageHeader" src="/res/certifications/MVA/2017_08_25_Getting_Started_with_Visual_Studio_2017-1.png"></img>
        </a>
        <section>
          <ul>
            <b>Links:</b><br />
            <li><b>PDF Version:</b> <Link_ href="/res/certifications/MVA/2017_08_25_Getting_Started_with_Visual_Studio_2017.pdf">Download</Link_></li>
          </ul>
        </section>
      </DefaultPage_>
    </>
  )
}
