import DefaultPage_ from "@/components/default-page";

export default function Contacts() {
  return (
    <>
      <DefaultPage_ page_id="contacts">

        <h1>Contact <span>Me</span></h1>
        <section>
          <p>
            Hey there! If you're on the lookout for a skilled professional to add to your team, I'd love to hear from you.
            <br />
            I'm currently available and ready to take on new challenges.
            You can find my contact details below.
          </p>

          <p>
            Let's connect!
          </p>
          <ul>
            <li><i class="far fa-envelope"></i> hi@mateus.digital </li>
            <li><i class="fas fa-phone"></i> +55 35 997 787 567</li>
            <li><i class="fab fa-github"></i> <a href="https://github.com/mateusdigital">github.com/mateusdigital</a></li>
            <li><i class="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/mateus-earth">linkedin.com/in/mateus-earth</a></li>
          </ul>
        </section>
      </DefaultPage_>
    </>
  )
}
