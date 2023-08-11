
import DefaultPage_ from "@/components/default-page";
import Link_ from "@/components/link";

export default function Page() {
  return (
    <>
      <DefaultPage_ page_id="certifications">
        <a href="/res/certifications/udemy/2016_01_18_Introductory_Course_on_WatchOS_Apps_with_Swift2_in_Xcode7-1.png">
          <img className="certificationDetailPageHeader" src="/res/certifications/udemy/2016_01_18_Introductory_Course_on_WatchOS_Apps_with_Swift2_in_Xcode7-1.png"></img>
        </a>
        <section>
          <ul>
            <b>Links:</b><br />
            <li><b>PDF Version:</b> <Link_ href="/res/certifications/udemy/2016_01_18_Introductory_Course_on_WatchOS_Apps_with_Swift2_in_Xcode7.pdf">Download</Link_></li>
          </ul>
        </section>
      </DefaultPage_>
    </>
  )
}
