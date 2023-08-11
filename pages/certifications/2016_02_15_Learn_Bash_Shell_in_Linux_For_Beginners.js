
import DefaultPage_ from "@/components/default-page";
import Link_ from "@/components/link";

export default function Page() {
  return (
    <>
      <DefaultPage_ page_id="certifications">
        <a href="/res/certifications/udemy/2016_02_15_Learn_Bash_Shell_in_Linux_For_Beginners-1.png">
          <img className="certificationDetailPageHeader" src="/res/certifications/udemy/2016_02_15_Learn_Bash_Shell_in_Linux_For_Beginners-1.png"></img>
        </a>
        <section>
          <ul>
            <b>Links:</b><br />
            <li><b>PDF Version:</b> <Link_ href="/res/certifications/udemy/2016_02_15_Learn_Bash_Shell_in_Linux_For_Beginners.pdf">Download</Link_></li>
          </ul>
        </section>
      </DefaultPage_>
    </>
  )
}
