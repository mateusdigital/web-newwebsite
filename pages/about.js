import Head_   from "@/components/head";
import Header_ from "@/components/header";
import Link_ from "@/components/link";
import Nav_    from "@/components/nav";

export default function Home () {
  return (
    <>
        <Head_ />

        <Header_ />
        <Nav_ />
        <main className="about">
            <p className="looking-for-resume">
                -- You might be probably looking for my <Link_ href="/resume">Resume</Link_>
            </p>

            <h1>About <span>me</span></h1>
            <p>
                Hello, my name is Mateus Mesquita and I'm a programmer living in my hometown with beautiful wife and loved
                daughter.
            </p>
            <p>
                This is my personal website, you can find here most of the code and ideas I came up with during my
                extra-professional time.
            </p>

            <div className='heading'>LATINO AMERICANO!</div>
            <hr />
            <p>
                I was born in France and raised in Romans-Sur-Isere where I spent most of my time playing soccer but somehow
                managed to graduate with a Master of Science in Computer Science from Grenoble University (French Alps).
                <br/><br/>
                <picture>
                    <source srcset="https://scontent.fplu21-1.fna.fbcdn.net/v/t39.30808-6/277774714_346410414192544_9052908265822505768_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeH3jqgDpQpsTl8wJRrThTXVN9EAmVEzS3s30QCZUTNLe3SYoM5goUgU32ROsUwn7j8so8CNkLW5QDs3H7qQA87K&_nc_ohc=Tib5cDum3AUAX8PCaBA&_nc_ht=scontent.fplu21-1.fna&oh=00_AfDHXYU_N2y1F73wIvAAfGpVoIeTgXpGYqFdsZKRFZOycA&oe=6406AD02" type="image/webp"/>
                    <img src="vercors.jpg" width="1130" height="391"/>
                </picture>
            </p>

            <div className='heading'>Lisboa</div>
            <hr />
            <p>
                In 2003, two days after graduating I started to work in Paris as a Software Engineer. I spent one year there
                coding by day and rollerblading by night.<br/><br/>

                <picture>
                    <img src="/img/lisbon.jpg" width="1000" height="388"/>
                </picture>
            </p>




            <div className='heading'>TORONTO</div>
            <hr />
            <p>
                In 2004 I left to Toronto, Canada with a Work Holiday Visa in order to "Explore, Dream and Discover" the world
                but mostly in order to improve my English. I was planning on staying five months but I ended up living there for
                nine years.<br/>
                <br/> My first job was busboy at the N'awlins on King Street!
                I quickly went back to programming and worked in various cool places, such as Rogers and QuickPlay as a Software
                Engineer.
                Eventually I created my own company: Memset Software.<br/><br/>
                <picture>
                    <source srcset="toronto.webp" type="image/webp"/>
                    <img src="toronto.jpg" width="1600" height="533"/>
                </picture>
            </p>







            <div className='heading'>CITIZENSHIP</div>
            <hr />
            <p>
                In July 2012 I was granted Canadian Citizenship. I am now a dual Citizen of both France and Canada :)! <br/><br/>

                <picture>
                    <source srcset="canada_flag.webp" type="image/webp"/>
                    <img src="canada_flag.png" width="1920" height="1200"/>
                </picture>
            </p>


            <div className='heading'>GOOGLE</div>
            <hr />
            <p>
                In 2014 I was hired by Google and I relocated to California in the USA.<br />
                <br />
                <picture>
                    <source srcset="San-Francisco-960-x-420.webp" type="image/webp"/>
                    <img src="San-Francisco-960-x-420.jpg" width="960" height="420"
                        />
                </picture>
            </p>

            <div className='heading'>BOOK</div>
            <hr />
            <p>
                In 2017 I published a 314 pages <a
                    href="https://www.amazon.com/Game-Engine-Black-Book-Wolfenstein/dp/1539692876">book</a> about the internal
                of 1992 game "Wolfenstein 3D".<br />
                <br />
                <picture>
                    <source srcset="gebbwolf3d.webp" type="image/webp"/>
                    <img src="gebbwolf3d.png" width="2777" height="224"/>
                </picture>
            </p>

            <div className='heading'>BOOK, AGAIN</div>
            <hr />
            <p>
                In 2018 I released the second edition of the <a href="../gebbwolf3d">Game Engine Black Book: Wolfenstein 3D</a>.
                <br />
                <br />
                <picture>
                    <source srcset="gebbwolf3d2.webp" type="image/webp"/>
                    <img src="gebbwolf3d2.png" width="2777" height="224"/>
                </picture><br />
                <br />
                The same year, I published a 418 pages book named <a href="../gebbdoom">Game Engine Black Book: DOOM</a> about
                the 1993 worldwide phenomenon.<br />
                <br />
                <picture>
                    <source srcset="gebbdoom.webp" type="image/webp"/>
                    <img src="gebbdoom.png" width="2778" height="293"/>
                </picture>
            </p>


            <div className='heading'>BOOK, AGAIN, AGAIN</div>
            <hr />
            <p>
                In 2022 I published a 250 pages book named <a href="../cpsb">The Book of CP-System</a> explaining the hardware
                running Capcom's early 90s arcade games. <br />
                <br />
                <picture>
                    <source srcset="cpsb_spin.webp" type="image/webp"/>
                    <img src="cpsb_spin.png" width="4838" height="379"/>
                </picture><br />
                <br />
            </p>
            <hr/>





















            Currently living in <a href="https://en.wikipedia.org/wiki/Kyiv">Kyiv</a>,
            but originally from small city in br/asil called <a
                href="https://en.wikipedia.org/wiki/Santa_Rita_do_Sapuca%C3%AD">Santa Rita do Sapucaí</a>.
            Enthusiastic about <b>FREE SOFTWARE</b>, <b>FREE CULTURE</b> and
            the <b>REMIX CULTURE</b>.

            Waiting a couple months to be <b>Батько красива дівчинки</b>.

            <h2>Work,</h2>
            <p>
                I'm Senior Programmer with focus in <a href="https://www.a11yproject.com/">A11Y</a>
                helping to create the Ubisoft's <b>SKULL AND BONES</b>.
                Previously I've worked at <b>Wargaming.net</b> in Minsk,
                <b>Miniclip</b> in Lisbon and for some companies in br/asil.
            </p>
            <p>
                I like to create small <a href="/games.html">Games</a>, <a href="/projects.html">Demos</a>,
                and some <a href="/projects.html">Creative Coding</a>.
            </p>
            <p>
                In 2018 I was a co-creator (together with <a href="https://montyontherun.itch.io">Monty</a>)
                of the <a href="/games/the_mistral_report.html">The Mistral Report</a> -
                This is a 1st person stealth dungeon crawler for MS-DOS that won the <a
                    href="http://www.retrozaragoza.com/">Retro Zaragozza 2018</a>🏆.
            </p>

            <h2>So...</h2>
            <p>
                You can take a look at my <a href="/resume.html">RESUME</a>,
                check my code at <a href="https://gitlab.com/stdmatt">GITLAB</a>
                find me at <a href="https://www.linkedin.com/in/stdmatt/">LINKEDIN</a> or <a href="/contacts.html">CONTACTS</a>
                or perhaps read my <a href="/blog.html">BLOG</a>.
            </p>

            <p>
                It's nice to see you here! <br />
                I hope that you enjoy ;D
            </p>




            <p>
                Hi! I'm Sarah Fossheim (pronouns: they/them), and I work as a front-end developer and inclusive designer. I'm
                passionate about accessibility, dataviz, and building ethical technology.

                I enjoy making drawings with CSS, I write about tech and collect ethical design resources. You can check ou/t
                what I'm currently working on through inprogress.fossheim.io.
                I'm located in Oslo, Norway, and working independently. You can hire me on a freelance basis for accessibility
                projects, creative coding and front-end consulting. I'm also open to do talks, workshops and training sessions.
                I'm taking on new clients from Febr/uary 2023 onwards.
                My favorite work projects are those where I get to work at the intersection of different disciplines, and
                combine my engineering and user experience design background to solve complex problems - all while keeping a
                focus on accessibility, ethics and user experience.
                I have worked in-house in the edtech and biotech sector, where I focused on building intuitive front-ends for
                data-heavy products. I have also worked as a consultant with both startups, the public sector and large
                corporations.
                Since starting my own business mid 2021, I mainly focus on accessibility and inclusive design.
                Depending on the project, this can mean a variety of things: performing (dataviz) accessibility reviews, having
                training sessions, writing documentation, implementing accessibility improvements and bugfixes, or developing
                new features with accessibility and WCAG compliance in mind from the start.
                I also build user friendly and accessible websites, prototypes and web apps.
            </p>
        </main>
    </>
  )
}
