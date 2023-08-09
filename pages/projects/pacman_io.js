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
            I've worked both in the client using <b>Emscripten</b>, and the server side, implement features
            and optimizations until the release of the game. The most notable one was some improvements to rendering routines, gaining ~36% (~30fps -&gt; ~41fps).</p>

          <p>
            Also in this project I've the pleasure to work with <a href="https://hugojustcode.com/">Hugo Ferreira</a>,
            which has become my best friend :)
          </p>
        </section>
      </ProfessionalPage_>
    </>
  )
}