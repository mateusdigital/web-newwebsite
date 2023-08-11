
import DefaultPage_ from "@/components/default-page";
import Link_ from "@/components/link";

export default function Page() {
  return (
    <>
      <DefaultPage_ page_id="certifications">
        <a href="/res/certifications/Tux4You/2015_02_19_Adminstracao_Ubuntu_Gnu_Linux-1.png">
          <img className="certificationDetailPageHeader" src="/res/certifications/Tux4You/2015_02_19_Adminstracao_Ubuntu_Gnu_Linux-1.png"></img>
        </a>
        <section>
          <ul>
            <b>Links:</b><br />
            <li><b>PDF Version:</b> <Link_ href="/res/certifications/Tux4You/2015_02_19_Adminstração_Ubuntu_Gnu:Linux.pdf">Download</Link_></li>
          </ul>
        </section>
      </DefaultPage_>
    </>
  )
}
