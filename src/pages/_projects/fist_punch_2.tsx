
import GetProjectPageInfo from "../components/project-detail-page/get-project-detail-page-info";
import ProfessionalPage_  from "../components/project-detail-page/professional-page";


export default function Page() {
    const info = GetProjectPageInfo()
    return (
        <>
            <ProfessionalPage_ info={info}>
                <section>
                    <p>
                        Fist Punch is two-player a retro inspired beat-up created by
                        Firehorse and commissioned by Cartoon Network.
                    </p>
                    <p>
                        I improved the game adding keyboard navigation, refactoring
                        the menu system and fixing localization problems.
                    </p>
                </section>
            </ProfessionalPage_>
        </>
    )
}
