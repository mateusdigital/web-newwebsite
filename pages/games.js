import Head_     from '@/components/head'
import Header_   from '@/components/header'
import Nav_      from '@/components/nav'
import ProjectItemCard_ from '@/components/project-item-card'

export default function Games () {
    return (
    <>
        <Head_ />
        <Header_ />
        <Nav_ />

        <main className="projects-list">
            <section>
                <h1>Professional <span>Games</span></h1>
                <div className='grid-container'>
                    <ProjectItemCard_ name='farcry6' />
                    <ProjectItemCard_ name='skull_and_bones' />
                    <ProjectItemCard_ name='wot_blitz' />
                    <ProjectItemCard_ name='8_ball_pool' />
                    <ProjectItemCard_ name='pacman_io' />
                    <ProjectItemCard_ name='the_banner_saga' />
                    <ProjectItemCard_ name='the_banner_saga_2' />
                    <ProjectItemCard_ name='killers_and_thieves' />
                    <ProjectItemCard_ name='like_a_boss' />
                    <ProjectItemCard_ name='at_sundown' />
                    <ProjectItemCard_ name='let_them_come' />
                    <ProjectItemCard_ name='fist_punch_2' />
                </div>
            </section>

            <section>
                <h1>Personal <span>Games</span></h1>
                <div className='grid-flow-container'>
                    <div className='column'>
                        <ProjectItemCard_ name='el_jamon_volador' />
                        <ProjectItemCard_ name='simple_snake'     />
                    </div>
                    <div className='column'>
                        <ProjectItemCard_ name='nuclear_rain' />
                        <ProjectItemCard_ name='cosmic_intruders' />
                        <ProjectItemCard_ name='the_mistral_report' />
                    </div>
                    <div className='column'>
                        <ProjectItemCard_ name='color_grid' />
                        <ProjectItemCard_ name='memory_amazing_cow' />
                    </div>
                </div>
            </section>

            <section>
                <h1>Very Old<span> Games</span></h1>
                <div className='grid-container'>
                    <ProjectItemCard_ name='bow_and_arrow' />
                    <ProjectItemCard_ name='kaboom' />
                    <ProjectItemCard_ name='ram_it' />
                    <ProjectItemCard_ name='space_raiders' />
                    <ProjectItemCard_ name='taz' />
                </div>
            </section>
        </main>
    </>
)
}
