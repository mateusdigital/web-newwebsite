
import DefaultPage_ from "@/components/default-page";
import Link_ from "@/components/link";

export default function Page() {
  return (
    <>
      <DefaultPage_ page_id="certifications">
        <a href="/res/certifications/MCP/2012_05_03_MTA-98-361_Software_Development_Fundamentals-1.png">
          <img className="certificationDetailPageHeader" src="/res/certifications/MCP/2012_05_03_MTA-98-361_Software_Development_Fundamentals-1.png"></img>
        </a>
        <section>
          <ul>
            <b>Links:</b><br />
            <li><b>PDF Version:</b> <Link_ href="/res/certifications/MCP/2012_05_03_MTA-98-361_Software_Development_Fundamentals.pdf">Download</Link_></li>
          </ul>
        </section>
      </DefaultPage_>
    </>
  )
}
