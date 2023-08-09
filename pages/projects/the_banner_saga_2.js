import GetProjectPageInfo from "@/components/project-detail-page/get-project-detail-page-info";
import ProfessionalPage_ from "@/components/project-detail-page/professional-page";

import Link_ from "@/components/link";

export default function Page() {
  const info = GetProjectPageInfo()
  return (
    <>
      <ProfessionalPage_ info={info}>
        <section>
          <p>
            The history of how I worked in this game is almost the same as
            the first <Link_ href="/projects/the_banner_saga">The Banner Saga</Link_>,
            since I worked in both together :)

          </p>

          <p>
            Also, this is my favorite to play in the series!
          </p>

        </section>
      </ProfessionalPage_>
    </>
  )
}