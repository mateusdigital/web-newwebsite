import GetProjectPageInfo from "@/components/project-detail-page/get-project-detail-page-info";
import ProfessionalPage_ from "@/components/project-detail-page/professional-page";


export default function Page() {
  const info = GetProjectPageInfo()
  return (
    <>
      <ProfessionalPage_ info={info}>
        <section>
          <p>
            Pacman.io is an online multiplayer game based on the classic arcade game Pac-Man.
            Players control their own Pac-Man character and compete against others in real-time.
          </p>

          <p>
            Navigate the maze, collect pellets and power-ups, while avoiding ghosts.
            Eat other players to gain points. <br />
            It's a fast-paced, competitive twist on the nostalgic Pac-Man experience.
          </p>

          <p>
            I've worked both in the client - using Emscripten - and the server side, implement features
            and optimizations until the release of the game.
          </p>

          <p>
            Also in this project I've the pleasure to work with <a href="https://hugojustcode.com/">Hugo Ferreira</a>,
            which has become my best friend :)
          </p>
        </section>
      </ProfessionalPage_>
    </>
  )
}