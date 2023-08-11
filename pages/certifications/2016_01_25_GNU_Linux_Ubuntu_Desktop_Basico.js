
import DefaultPage_ from "@/components/default-page";
import Link_ from "@/components/link";

export default function Page() {
  return (
    <>
      <DefaultPage_ page_id="certifications">
        <a href="/res/certifications/GoLearny/2016_01_25_GNU_Linux_Ubuntu_Desktop_Basico-1.png">
          <img className="certificationDetailPageHeader" src="/res/certifications/GoLearny/2016_01_25_GNU_Linux_Ubuntu_Desktop_Basico-1.png"></img>
        </a>
        <section>
          <ul>
            <b>Links:</b><br />
            <li><b>PDF Version:</b> <Link_ href="/res/certifications/GoLearny/2016_01_25_GNU_Linux_Ubuntu_Desktop_Básico.pdf">Download</Link_></li>
          </ul>
        </section>
      </DefaultPage_>
    </>
  )
}
