
import DefaultPage_ from "@/components/default-page";
import Link_ from "@/components/link";

export default function Page() {
  return (
    <>
      <DefaultPage_ page_id="certifications">
        <a href="/res/certifications/Coursera/2015_03_23_Welcome_to_Game_Theory-1.png">
          <img className="certificationDetailPageHeader" src="/res/certifications/Coursera/2015_03_23_Welcome_to_Game_Theory-1.png"></img>
        </a>
        <section>
          <ul>
            <b>Links:</b><br />
            <li><b>PDF Version:</b> <Link_ href="/res/certifications/Coursera/2015_03_23_Welcome_to_Game_Theory.pdf">Download</Link_></li>
          </ul>
        </section>
      </DefaultPage_>
    </>
  )
}
