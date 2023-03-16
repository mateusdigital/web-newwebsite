
import GetProjectPageInfo from "@/components/project-detail-page/get-project-detail-page-info";
import ProfessionalPage_  from "@/components/project-detail-page/professional-page";


export default function Page() {
    const info = GetProjectPageInfo()
    return (
        <>
            <ProfessionalPage_ info={info}>
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
            </ProfessionalPage_>
        </>
    )
}
