
import GetProjectPageInfo from "@/components/project-detail-page/get-project-detail-page-info";
import ProjectDetailPage_ from "@/components/project-detail-page/project-detail-page";

export default function Page() {
    const info = GetProjectPageInfo()
    return (
        <>
            <ProjectDetailPage_ info={info}>
                <section>
                    <p>
                        Improve game for publishing by adding features and fixing bugs.
                        Work extensively to optimize Lua and Unity interop code.
                        Implemented UI features in Unity and Gameplay features in Lua.
                        Implement and refine AI algorithms for heists.
                        Implement Steamworks API.
                        Worked with: Unity, Lua, C#, and Git
                    </p>
                </section>
            </ProjectDetailPage_>
        </>
    )
}
