import AboutSection_ from "@/components/about/about-section";
import DefaultPage_ from "@/components/default-page";
import Link_ from "@/components/link";

export default function About() {
  return (
    <>
      <DefaultPage_ page_id="about">
        <p className="aboutPageLookingForResume">
          -- You might be probably looking for my <Link_ href="/resume">Resume</Link_>
        </p>

        <h1>About <span>me</span></h1>
        <section>
          <p>
            Hello, my name is Mateus Mesquita and I'm a programmer living in my hometown with my beautiful wife and our loved daughter.
          </p>
          <p>
            This is my personal website, you can find here most of the code and ideas I came up with during my extra-professional time.
          </p>
        </section>

        <AboutSection_ title="latino americano!" photo="srs_1">
          <p>
            I'm from a small city called Santa Rita do Sapucaí, in the state of Minas Gerais, Brazil!
          </p>

          <p>
            In the first 28 years of my life, I lived and visited many places. My hometown,
            Contagem, Belo Horizonte, Jundiaí, Cajamar, Curitiba, and São Paulo were some of them.
          </p>

          <p>
            When I was younger, I had a few bands and made friends who I still carry with me today.
          </p>

          <p>
            In 2010, I enrolled in a Computer Science course in Belo Horizonte, the capital of my state.
            Although I didn't complete the course, it was during this time that I joined the Microsoft Innovation Center (MicBH).
          </p>

          <p>
            At MicBH, I worked actively with the then-new Windows Phone. Besides developing small games and applications
            (I won two brand-new Lumias for making some games), I also worked extensively on educational content about the platform.
          </p>

          <p>
            This effort earned me the title of Microsoft Student Partner, which I held for a period of two years (2011-2013).
            During this time, I had the opportunity to speak at various academic centers and universities,
            especially at the Federal University of Itajuba, the Telecommunications Institute,
            and the Pontifical Catholic University of Minas Gerais, among others.
            <br /><br />
            I even got on the newspaper ":)"
          </p>

          <p>
            This was a period of intense study that resulted in two Microsoft certifications for me:
          </p>

          <li><Link_ href="certifications/2012_06_28_MTA-98-373_Mobile_Development_Fundamentals">Microsoft - MTA-98-373 </Link_></li>
          <li><Link_ href="certifications/2012_06_28_MTA-98-373_Mobile_Development_Fundamentals">Microsoft - MTA-98-361 </Link_></li>

          <p>
            And more than <Link_ href="certifications"> +95 other <i>minor</i> certifications</Link_>.
          </p>

          <p>
            In 2016, I became a programmer at Firehorse Studios in São Paulo, an opportunity that allowed
            me to work on games like <Link_ href="/projects/the_banner_saga">The Banner Saga 1</Link_> and <Link_ href="/projects/the_banner_saga_2">2</Link_>,
            <Link_ href="/projects/killers_and_thieves">Killers and Thieves</Link_>, and others.
          </p>
        </AboutSection_>


        <AboutSection_ title="LISBON" photo="lisbon">
          <p>
            At the end of 2017, I was invited to join the Miniclip Portugal team, and in May 2018,
            I was leaving the country for the first time!
          </p>
          <p>
            While in Portugal, I made the best friends of my life and visited incredibly interesting places.
            During that time, I visited Croatia, France, Spain, and almost all of Portugal.
          </p>
          <p>
            In addition to working on <Link_ href="/projects/pacman_io">Pacman.io</Link_> and <Link_ href="/projects/8_ball_pool">8 Ball Pool</Link_>,
            I co-authored <Link_ href="/projects/the_mistral_report">The Mistral Report</Link_> with <a href="https://montyontherun.itch.io">Monty</a>, a 1st person stealth dungeon crawler
            for MS-DOS that won the <a href="http://www.retrozaragoza.com/">Retro Zaragozza 2018</a>🏆.
          </p>

          <p>
            With the interest in retro computers high, I also launched <Link_ href="/projects/el_jamon_volador">El Jamon Volador</Link_> for the Game Boy.
          </p>

        </AboutSection_>

        <AboutSection_ title="Minsk" photo="belarus_1">
          <p>
            At the end of 2019, my career progressed with an invitation to join the <b>Wargaming</b> team, and in October,
            I moved to the capital of Belarus. Initially, the cultural shift and language barrier proved to be
            challenging, but the sheer excitement helped me overcome it!
          </p>

          <p>
            At Wargaming, I worked on two games. First, as a <b>Server Programmer</b>, I was responsible for implementing
            the game metaservers, unfortunately, I'm under NDA, so I can't discuss it further.
            Secondly, I worked with <b>Unreal Engine 4</b> to create UI and some gameplay elements for the successful <Link_ href="/projects/el_jamon_volador">World of Tanks - Blitz</Link_>.
          </p>

          <p>
            I also started to learn Russian as my third language, and things were going well,
            but this changed with the 2020 elections.
          </p>
        </AboutSection_>

        <AboutSection_ title="Kyiv" photo="kyiv_4">
          <p>
            Due to political instability following the 2020 elections in Belarus, I decided to accept an offer
            from <b>Ubisoft Kyiv</b> to join as <b>Senior Programmer</b> for the upcoming <Link_ href="/projects/el_jamon_volador">Skull and Bones</Link_>.
          </p>
          <p>
            My job was to implement <b>state-of-the-art accessibility solutions</b>, which focused on <b>text-to-speech</b>
            and <b>speech-to-text</b>. I worked with a multi-studio effort involving Kyiv, Odesa, Berlin, and Belgrade.
          </p>
          <p>
            Kyiv was the most awesome place I had lived into date, with a vibrant culture, wonderful places
            to chill or hang out with friends, and the hospitality of the people I met made me love the city.
          </p>
          <p>
            After living in Kyiv for two years and starting a family, the situation became unbearable
            when the Russian Federation started a special military operation on the territory of
            Ukraine on February 24th, 2023, forcing me to flee...
          </p>
        </AboutSection_>

        <AboutSection_ title="Brasil again..." photo="guaruja_1">
          <p>
            After deciding to leave the territory of Ukraine, I felt it was time for a <b>break</b>. My daughter was about
            to be born, and the outcome of the invasion was unclear, so we decided to move back to Brazil.
          </p>
          <p>
            Initially, my family and I lived in the coastal city of Guarujá, where Marla was born, and we enjoyed
            long walks at sunset with our dog, Pingo.
          </p>
          <p>
            Later on, we decided it would be wise to move closer to family and returned to my hometown.
          </p>
        </AboutSection_>

        <script src="/src/image-offset.js" defer></script>
      </DefaultPage_>
    </>
  )
}
