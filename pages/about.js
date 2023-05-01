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
            Hello, my name is Mateus Mesquita and I'm a programmer living in my hometown with beautiful wife and loved
            daughter.
          </p>
          <p>
            This is my personal website, you can find here most of the code and ideas I came up with during my
            extra-professional time.
          </p>
        </section>

        <AboutSection_ title="latino americano!" photo="srs_1">
          <p>
            I'm from a small city called Santa Rita do Sapucai, in the state of Minas Gerais, Brazil!
          </p>

          <p>
            In the first 28 years of my life, I lived and visited many places. My hometown,
            Contagem, Belo Horizonte, Jundiai, Cajamar, Curitiba, and Sao Paulo were some of them.
          </p>

          <p>
            When I was younger, I had a few bands and made friends who I still carry with me today.
          </p>

          <p>
            In 2010, I enrolled in the Computer Science course in Belo Horizonte, the capital of my state.
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

          <li>Microsoft - MTA-98-373</li>
          <li>Microsoft - MTA-98-361</li>

          <p>
            And more than 123 other minor certifications.
          </p>

          <p>
            In 2016, I became a programmer at Firehorse Studios in Sao Paulo, an opportunity that allowed
            me to work on games like The Banner Saga 1 and 2, Killers and Thieves, and others.
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
            In addition to working on Pacman.io and 8 Ball Pool, I co-authored The Mistral Report
            with <a href="https://montyontherun.itch.io">Monty</a>, a 1st person stealth dungeon crawler
            for MS-DOS that won the <a href="http://www.retrozaragoza.com/">Retro Zaragozza 2018</a>🏆.
          </p>

          <p>
            With the interest in retro computers high, I also launched El Jamon Volador for the Game Boy.
          </p>

        </AboutSection_>

        <AboutSection_ title="Minsk" photo="belarus_1">
          <p>
            In the end of 2019, my career progressed with an invitation to join the Wargaming team, and in October,
            I moved to the capital of Belarus. Initially, the cultural shift and language barrier proved to be
            challenging, but the sheer excitement helped me overcome it!
          </p>

          <p>
            At Wargaming, I worked on two games. First, as a Server Programmer, I was responsible for implementing
            the game metaservers. Unfortunately, I'm under NDA, so I can't discuss it further.
            Secondly, I worked with Unreal Engine 4 to create UI and some gameplay elements for the successful World of Tanks - Blitz.
          </p>

          <p>
            I also started to learn Russian as my third language, and things were going well,
            but this changed with the 2020 elections.
          </p>
        </AboutSection_>

        <AboutSection_ title="Kyiv" photo="kyiv_4">
          <p>
            Due to political instability following the 2020 elections in Belarus, I decided to accept an offer
            from Ubisoft Kyiv to join as Senior Programmer for the upcoming Skull and Bones.
          </p>
          <p>
            My job was to implement state-of-the-art accessibility solutions, which focused on text-to-speech
            and speech-to-text. I worked with a multi-studio effort involving Kyiv, Odessa, Berlin, and Belgrade.
          </p>
          <p>
            Kyiv was the most awesome place I had lived in to date, with a vibrant culture, wonderful places
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
            After deciding to leave the territory of Ukraine, I felt it was time for a break. My daughter was about
            to be born, and the outcome of the invasion was unclear, so we decided to move back to Brazil.
          </p>
          <p>
            Initially, my family and I lived in the coastal city of Guaruja, where Marla was born, and we enjoyed
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
