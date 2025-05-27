// -----------------------------------------------------------------------------
import Link from "../components/Link";
// -----------------------------------------------------------------------------
import AboutSection from "../components/about/AboutSection";
import DefaultPage from "../components/DefaultPage";


//
// Component
//

// -----------------------------------------------------------------------------
export function About() {
  return (
    <DefaultPage pageId="about">
      {/* Resume callout */}
      <p className="aboutPageLookingForResume">
        -- You might be probably looking for my <Link href="/resume">Resume</Link>
      </p>

      {/* Intro */}
      <h1>About <span>me</span></h1>
      <section>
        <p>
          Hello, my name is <b>Mateus Mesquita</b> and I'm a programmer
          living in Brasil.
        </p>
        <p>
          This is my personal website, you can find here most of the code and
          ideas I came up with during my extra-professional time.
        </p>
      </section>


      {/* Latino Americano */}
      <AboutSection title="Latino Americano!" photo="srs_1">
        <p>
          I'm from a small city called Santa Rita do Sapucaí, in the state of
          Minas Gerais, Brazil!
        </p>

        <p>
          In the first 28 years of my life, I lived and visited many places.
          My hometown, Contagem, Belo Horizonte, Jundiaí, Cajamar, Curitiba,
          and São Paulo were some of them.
        </p>

        <p>
          When I was younger, I had a few bands and made friends who I still
          carry with me today.
        </p>

        <p>
          In 2010, I enrolled in a Computer Science course in Belo Horizonte,
          the capital of my state.  Although I eventually drop it out,
          but was during this time that I joined
          the <Link href="/photos/">Microsoft Innovation Center</Link> (MicBH).
        </p>

        <p>
          At <b>MicBH</b>, I worked actively with the <i>then-new</i> Windows Phone.
          Besides developing small games and applications&nbsp;
          <span className="textDetail">(I won two brand-new Lumias for making some games)</span>,
          I also worked extensively on educational content about the platform.
        </p>

        <p>
          This effort earned me the title of <b>Microsoft Student Partner</b>, which I held for a period of two years (2011-2013).
          During this time, I had the opportunity to speak at various academic centers and universities,
          especially at the <b>Federal University of Itajubá</b> (UNIFEI), <b>Instituto Nacional de Telecomunicações</b> (Inatel),
          and the <b>Pontifícia Universidade Católica de Minas Gerais</b> (PUC-MG), among others.
          <br />
          <br />
          I even got on the newspaper ":)"
        </p>

        <p>
          This was a period of intense study that resulted in two Microsoft
          certifications for me:
        </p>

        <li><Link href="certifications/2012_06_28_MTA-98-373_Mobile_Development_Fundamentals">Microsoft - MTA-98-373 </Link></li>
        <li><Link href="certifications/2012_06_28_MTA-98-373_Mobile_Development_Fundamentals">Microsoft - MTA-98-361 </Link></li>

        <p>
          And more than <Link href="certifications"> +95 other <i>minor</i> certifications</Link>.
        </p>

        <p>
          In 2016, I became a programmer at <b>Firehorse Studios</b> in São Paulo, an
          opportunity that allowed me to work on games like <Link href="/projects/the_banner_saga">The Banner Saga 1</Link>,&nbsp;
          <Link href="/projects/the_banner_saga_@">The Banner Saga 2</Link>,&nbsp;
          <Link href="/projects/killers_and_thieves">Killers and Thieves</Link> and others.
        </p>
      </AboutSection>


      {/* Lisbon */}
      <AboutSection title="LISBON" photo="lisbon">
        <p>
          At the end of 2017, I was invited to join the <b>Miniclip Portugal</b> team,
          and in May 2018, I was leaving the country for the first time!
        </p>
        <p>
          While in Portugal, I made the best friends of my life and visited
          incredibly interesting places.  During that time, I went to Croatia,
          France, Spain, and almost all parts of Portugal.
        </p>
        <p>
          In addition to working on <Link href="/projects/pacman_io">PacMan.io</Link> and <Link href="/projects/8_ball_pool">8 Ball Pool</Link>,
          I co-authored <Link href="/projects/the_mistral_report">The Mistral Report</Link> with <a href="https://montyontherun.itch.io">Monty</a>,
          a 1st person stealth dungeon crawler for MS-DOS that won the <a href="http://www.retrozaragoza.com/">Retro Zaragozza 2018</a>🏆.
        </p>

        <p>
          With the interest in retro computers high,
          I also launched <Link href="/projects/el_jamon_volador">El Jamon Volador</Link>
          &nbsp;for the Game Boy.
        </p>
      </AboutSection>


      {/* Minsk */}
      <AboutSection title="Minsk" photo="belarus_1">
        <p>
          At the end of 2019, my career progressed with an invitation to join
          the <b>Wargaming</b> team, and in October, I moved to the capital of
          Belarus. Initially, the cultural shift and language barrier proved to
          be challenging, but the sheer excitement helped me overcome it!
        </p>

        <p>
          At Wargaming, as a <b>Server Programmer</b>,
          I was responsible for implementing the game meta-servers - which
          proved immensely helpful later on.

          Then, I worked with <b>Unreal Engine 4</b> to create UI and
          some gameplay elements for the
          successful <Link href="/projects/el_jamon_volador">World of Tanks - Blitz</Link>.
        </p>

        <p>
          I also started to learn Russian as my third language, and things were going well,
          but this changed with the 2020 elections...
        </p>
      </AboutSection>


      {/* Kyiv */}
      <AboutSection title="Kyiv" photo="kyiv_4">
        <p>
          Due to political instability following the 2020 elections in Belarus,
          I decided to accept an offer from <b>Ubisoft Kyiv</b> to join
          as <b>Senior Programmer</b> for the
          upcoming <Link href="/projects/el_jamon_volador">Skull and Bones</Link>.
        </p>

        <p>
          My job was to implement state-of-the-art <b>accessibility solutions</b>,
          which focused on <b>text-to-speech</b> and <b>speech-to-text</b>.
          I worked with a multi-studio effort involving Kyiv, Odessa, Berlin, and Belgrade.
        </p>

        <p>
          Kyiv was the most awesome place I had lived up to date, with a vibrant
          culture, wonderful places to chill or hang out with friends, and
          the hospitality of the people I met made me love the city and the language,
          which made Ukrainian my fourth language.
        </p>

        <p>
          After living in Kyiv for two years the situation became unbearable
          when the war has started, forcing me to leave...
        </p>
      </AboutSection>


      {/* Brasil Again... */}
      <AboutSection title="Brasil again..." photo="guaruja_1">
        <p>
          After deciding to leave the territory of Ukraine, I felt it was time
          for a <b>break</b>. My daughter was about to be born, and the outcome
          of the war was unclear, so we decided to move back to Brasil.
        </p>

        <p>
          Initially, I lived in Guarujá, where Marla was born, and we enjoyed
          long walks at sunset with my dog, Pingo.
        </p>

        <p>
          During this time I've worked as freelancer for a couple of companies,
          and also got involved making the Epic's <Link href="/projects/fortnite">Fortnite</Link> and
          some very interesting work for <Link href="/projects/unakin">unakin.ai</Link>.
        </p>
      </AboutSection>

      {/* L */}
      <AboutSection title="Leading the way" photo="sao_paulo_3">
        <p>
          At the end of 2024 I joined the <Link href="">HypeJoe Games</Link> as <b>Tech Lead</b>,
          leading the development of the <Link href="/projects/uniqkiller">Uniqkiller</Link>.
        </p>

        <p>
          And here we are...
        </p>
      </AboutSection>


      {/* Page Scripts */}
      <script src="/src/image-offset.js" defer></script>
    </DefaultPage>
  )
}

// -----------------------------------------------------------------------------
(About as any).__location = import.meta.url;
export default About;