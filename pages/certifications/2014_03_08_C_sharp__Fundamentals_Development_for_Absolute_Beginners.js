
import DefaultPage_ from "@/components/default-page";
import Link_ from "@/components/link";

export default function Page() {
  return (
    <>
      <DefaultPage_ page_id="certifications">
        <a href="/res/certifications/MVA/2014_03_08_C_sharp__Fundamentals_Development_for_Absolute_Beginners-1.png">
          <img className="certificationDetailPageHeader" src="/res/certifications/MVA/2014_03_08_C_sharp__Fundamentals_Development_for_Absolute_Beginners-1.png"></img>
        </a>
        <section>
          <ul>
            <b>Links:</b><br />
            <li><b>PDF Version:</b> <Link_ href="/res/certifications/MVA/2014_03_08_C_sharp__Fundamentals_Development_for_Absolute_Beginners.pdf">Download</Link_></li>
          </ul>
        </section>
      </DefaultPage_>
    </>
  )
}
