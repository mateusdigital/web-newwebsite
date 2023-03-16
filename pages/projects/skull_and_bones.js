
import GetProjectPageInfo from "@/components/project-detail-page/get-project-detail-page-info";
import ProfessionalPage_  from "@/components/project-detail-page/professional-page";


export default function Page() {
    const info = GetProjectPageInfo()
    return (
        <>
            <ProfessionalPage_ info={info}>
                <section>
                    <p>
                        After working in Skull and Bones I went to help the release of LOST BETWEEN WORLDS DLC.

                        Bug fixing for <i>A11Y</i> components.
                        Worked with Ubisoft's Dunia engine and Phoenix UI.
                    </p>
                </section>
            </ProfessionalPage_>
        </>
    )
}
