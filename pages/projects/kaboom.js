
import GetProjectPageInfo from "@/components/project-detail-page/get-project-detail-page-info";
import ProjectDetailPage_ from "@/components/project-detail-page/project-detail-page";

export default function Page() {
    const info = GetProjectPageInfo()
    return (
        <>
            <ProjectDetailPage_ info={info}>
                <section>
                    <p>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur at similique labore sed rerum consequatur quaerat ut deserunt quisquam dicta.
                    </p>
                </section>
            </ProjectDetailPage_>
        </>
    )
}
