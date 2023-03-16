import GetProjectPageInfo from "@/components/project-detail-page/get-project-detail-page-info";
import ProfessionalPage_  from "@/components/project-detail-page/professional-page";

export default function Page() {
    const info = GetProjectPageInfo()
    return (
        <>
            <ProfessionalPage_ info={info}>
                <section>
                    <p>
                        In this project I was responsible to integrate the AlienFx SDK to YoYo Games' Game Maker.
                        The AlienFx SDK is written in C++ and provided as an DLL file, but it isn't readily usable in Game Maker.
                        My job was write a binding that maps more 1:1 possible the C++ in GML (the Game Maker scripting language).
                        It was very challenging since I had no experience in Game Maker at all, but at end we managed to get it right.
                        I write some shell scripting to ease the studio day to day stuff and I wrote an texture packer algorithm to improve the performance of the particle system.
                    </p>
                </section>
            </ProfessionalPage_>
        </>
    )
}
