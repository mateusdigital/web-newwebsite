// -----------------------------------------------------------------------------
import DefaultPage_ from "@/components/default-page";
// -----------------------------------------------------------------------------
import EnvelopeIcon_ from "@/components/icons/envelop";
import PhoneIcon_ from "@/components/icons/phone";
import GithubIcon_ from "@/components/icons/github";
import YoutubeIcon_ from "@/components/icons/youtube";
import InstagramIcon_ from "@/components/icons/instagram";
import LinkedinIcon_ from "@/components/icons/linkedin";
import ItchIcon_ from "@/components/icons/itchio-textless-black";
import TwitterIcon_ from "@/components/icons/twitter";

//
//
//

// -----------------------------------------------------------------------------
export default function Contacts() {
  return ( <>
    <DefaultPage_ page_id="contacts">
      <h1>Contact <span>Me</span></h1>
      <section>
        <p>
          Hey there!
        </p>
        <p>
          If you're on the lookout for a skilled professional to
          add to your team, I'd love to hear from you.  I'm currently available
          for freelancing opportunities and ready to take on new challenges.
        </p>
        <p>
          You can find my contact details below.
          <br/>
          Let's connect!
        </p>

        <ul>
          <li><EnvelopeIcon_/> <a href="mailto:hello@mateus.digital">hello@mateus.digital</a></li>
          <li><PhoneIcon_/> <a href="tel:+5535984765140">+55 35 987 465 140</a></li>
          <li><GithubIcon_/> <a href="https://github.com/mateusdigital">github.com/mateusdigital</a></li>
          <li><ItchIcon_/> <a href="https://mateusdigital.itch.io">mateusdigital.itch.io</a></li>
          <li><YoutubeIcon_/> <a href="https://www.youtube.com/@_mateusdigital">youtube.com/@_mateusdigital</a></li>
          <li><LinkedinIcon_/> <a href="https://www.linkedin.com/in/mateusdigital">linkedin.com/in/mateusdigital</a></li>
          <li><TwitterIcon_/> <a href="https://twitter.com/_mateusdigital">twitter.com/_mateusdigital</a></li>
          <li><InstagramIcon_/> <a href="https://instagram.com/_mateusdigital_">instagram.com/_mateusdigital_</a></li>
        </ul>
      </section>
    </DefaultPage_>
  </>)
}
