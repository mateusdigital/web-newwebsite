import AboutSection_ from "@/components/about/about-section";
import DefaultPage_ from "@/components/default-page";
import Link_ from "@/components/link";

export default function About() {
  return (
    <>
        <DefaultPage_ page="about">
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

            <AboutSection_ title="latino americano!" photo="srs_1">
                    I'm from a small city called Santa Rita do Sapucai, in the State of Minas Gerais, Brasil!

                    Nos primeiros 28 anos de minha vida eu vivi e conheci muitos lugares
                    Minha cidade natal, Contagem, Belo Horizonte, Jundiai, Cajamar, Curitiba, Sao Paulo,

                    Eu tive algumas bandas quando jovem e fiz amigos que carrego hoje.

                    Em 2010 eu entrei para o curso de Ciencia da Computacao em Belo Horizonte, a capital do meu estado.
                    Embora nao tenha concluido o curso, foi nesse periodo que entrei no Microsoft Inovation Center (MicBH).

                    No MicBH eu trabalhei ativamente com, o entao novo, Windows Phone. Alem de pequenos jogos e
                    aplicativos que foram desenvolvidos (eu ganhei 2 lumias novinhos por fazer alguns jogos) eu
                    trabhei bastente com conteudos educacionais sobre a platforma.

                    Este esforco me valeu o titulo de Microsoft Student Partner a qual fui pelo periodo de 2 anos (2011-2013).
                    Durante esste tempo eu tive a oportunidade de palestrar em diversos centros academicos e universidades,
                    em especial na Universdade Federal de Itajuba,
                    No Instutudo de Telecomuicacoes e Pontificia Universade Catolica de Minas Gerais - e outros.

                    Esse foi um periodo de muito estudo no qual me resulto em duas certificoes da Microsfot:
                    <li>Microsoft - MTA-98-373</li>
                    <li>Microsoft - MTA-98-361</li>
                    E mais de 123 outras certificoes menores.
            </AboutSection_>


            <AboutSection_ title="LISBON" photo="lisbon">
                <p>
                    No final de 2017 eu recebi uma ligacao da Miniclip me convidado para ir para me juntar ao time da
                    Miniclip Porgutal, em Maio de 2018 eu estava pela primeira vez saindo do pais!
                </p>
                <p>
                    Em Portugal eu fiz os melhores amigos da minha vida e visitei lugares incrivelmente interessantes.
                    Nesse tempo eu vistei a Croacia, a Franca, a Espanha e quase todo Portugal.
                </p>

                <p>
                    Alem de trabalhar no Pacman.io e no 8 Ball Pool, eu fui co-author junto com  <a href="https://montyontherun.itch.io">Monty</a>
                    de The Mistral Report,  1st person stealth dungeon crawler for MS-DOS that won the <a href="http://www.retrozaragoza.com/">Retro Zaragozza 2018</a>🏆.

                    Com o intresse em retro computer em alta eu lancei o El Jamon Volador para o Game Boy.
                </p>

                <p>
                </p>
            </AboutSection_>


            <AboutSection_ title="Minsk" photo="belarus_1">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quam veniam repellendus reiciendis nemo culpa voluptatem labore assumenda similique deserunt.
                </p>
                <p>
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ipsa.
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet itaque libero earum dolore magnam magni, et, nisi perferendis iusto dicta numquam voluptas, eveniet tempora officia nulla nihil ratione maiores dolorem.
                </p>

            </AboutSection_>

            <AboutSection_ title="Kyiv" photo="kyiv_4">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quam veniam repellendus reiciendis nemo culpa voluptatem labore assumenda similique deserunt.
                </p>
                <p>
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ipsa.
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet itaque libero earum dolore magnam magni, et, nisi perferendis iusto dicta numquam voluptas, eveniet tempora officia nulla nihil ratione maiores dolorem.
                </p>
            </AboutSection_>

            <AboutSection_ title="Brasil again..." photo="guaruja_1">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quam veniam repellendus reiciendis nemo culpa voluptatem labore assumenda similique deserunt.
                </p>
                <p>
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ipsa.
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet itaque libero earum dolore magnam magni, et, nisi perferendis iusto dicta numquam voluptas, eveniet tempora officia nulla nihil ratione maiores dolorem.
                </p>
            </AboutSection_>

            <script src="/src/image-offset.js" defer></script>
        </DefaultPage_>
    </>
  )
}
