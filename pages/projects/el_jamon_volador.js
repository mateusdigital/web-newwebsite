import Link_ from "@/components/link";
import GetProjectPageInfo from "@/components/project-detail-page/get-project-detail-page-info";
import PersonalPage_  from "@/components/project-detail-page/personal-page";

export default function Page() {
    const info = GetProjectPageInfo()
    return (
        <>
            <PersonalPage_ info={info}>
            <section>
                <p>
                    Roses was created in 2020, after I got interested with the patterns
                    that can be created with the formulas.
                </p>
                <p>
                    It was created with <Link_ href="">demolib</Link_>, it's licensed as <Link_ href="">GPLv3</Link_>.
                </p>
            </section>
            </PersonalPage_>
        </>
    )
}
