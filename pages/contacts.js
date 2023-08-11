import DefaultPage_ from "@/components/default-page";

import EnvelopeIcon_ from "@/components/icons/envelop";
import PhoneIcon_ from "@/components/icons/phone";
import GithubIcon_ from "@/components/icons/github";
import LinkedinIcon_ from "@/components/icons/linkedin";
import ItchIcon_ from "@/components/icons/itchio-textless-black";
import TwitterIcon_ from "@/components/icons/twitter";


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
            <li><EnvelopeIcon_/> hello@mateus.digital </li>
            <li><PhoneIcon_/> +55 35 997 787 567</li>
            <li><GithubIcon_/> <a href="https://github.com/mateusdigital">github.com/mateusdigital</a></li>
            <li><LinkedinIcon_/> <a href="https://www.linkedin.com/in/mateusdigital">linkedin.com/in/mateusdigital</a></li>
            <li><ItchIcon_/> <a href="https://mateusdigital.itch.io">mateusdigital.itch.io</a></li>
            <li><TwitterIcon_/> <a href="https://twitter.com/_mateusdigital">twitter.com/_mateusdigital</a></li>
          </ul>
        </section>
      </DefaultPage_>
    </>
  )
}
