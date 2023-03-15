import GetProjectPageInfo from "@/components/project-detail-page/get-project-detail-page-info";
import ProjectDetailPage_ from "@/components/project-detail-page/project-detail-page";

export default function Page() {
    const info = GetProjectPageInfo()
    return (
        <>
            <ProjectDetailPage_ info={info}>
            <section>
                    <p>
                        Firehorse and Stoic Studio had the same publisher at the time - VersusEvil, which
                        allowed them to collaborate very interestingly and I ended up working with
                        those amazing award wining games.
                    </p>
                </section>
            </ProjectDetailPage_>
        </>
    )
}
