import GetProjectPageInfo from "@/components/project-detail-page/get-project-detail-page-info";
import ProfessionalPage_  from "@/components/project-detail-page/professional-page";

import Link_ from "@/components/link";

export default function Page() {
    const info = GetProjectPageInfo()
    return (
        <>
            <ProfessionalPage_ info={info}>
            <section>
                    <p>
                        Firehorse and Stoic Studio had the same publisher at the time - VersusEvil, which
                        allowed them to collaborate very interestingly and I ended up working with
                        those amazing award wining games.
                    </p>

                    <p>
                        I was responsible to maintain and improve both games for Stoic Studio.
                        At the time it was a huge challenge, since the games were written in a totally
                        different stack that I was used to. Also the scope of the project - then, the
                        biggest project I'd worked on - made it a true challenge.
                    </p>

                    <p>
                        The game was written in mixture of languages with Action Script 3 as the primally
                        language for the game and tools, and lots of different middleware for multiple
                        platforms. Ant was used as the build system, and Mercurial was the versioning
                        used by the team.
                    </p>

                    <p>
                        I've a pair of meetings with the Stoic team, but mostly of the work was simple
                        done by picking the assigned tasks from Jira and chatting with the devs when
                        problems popped up.
                    </p>
                </section>

                <section>
                    This is one of the most beloved projects that I've worked, it helped to open
                    so many doors and gave me so nice opportunities.
                    After this project I got the opportunity to make Stoic Studio's <Link_ href="/projects/killers_and_thieves">Killers and Thieves</Link_>.
                </section>
            </ProfessionalPage_>
        </>
    )
}