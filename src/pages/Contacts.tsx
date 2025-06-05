// -----------------------------------------------------------------------------
import DefaultPage from "../components/DefaultPage";
import Link from "../components/Link";
// -----------------------------------------------------------------------------
import EnvelopeIcon_ from "../components/icons/envelop";
import PhoneIcon_ from "../components/icons/phone";
import GithubIcon_ from "../components/icons/github";
import YoutubeIcon_ from "../components/icons/youtube";
import InstagramIcon_ from "../components/icons/instagram";
import LinkedinIcon_ from "../components/icons/linkedin";
import ItchIcon_ from "../components/icons/itchio-textless-black";
import TwitterIcon_ from "../components/icons/twitter";
import VSCodeIcon_ from "../components/icons/vscode";
// -----------------------------------------------------------------------------

//
//
//

// -----------------------------------------------------------------------------
export function Contacts() {
  return (
    <DefaultPage pageId="contacts">
      {/*  */}
      <h1>Contact <span>Me</span></h1>
      <section>
        <p>
          <Link href="https://www.youtube.com/watch?v=frszEJb0aOo"  target="_blank"> Hello there!</Link>
        </p>
        <p>
          If you're on the lookout for a skilled professional to
          add to your team, I'd love to hear from you.  I'm currently available
          for freelancing opportunities and ready to take on new challenges.
        </p>
        <p>
          You can find my contact details below.
        </p>
      </section>

      {/*  */}
      <section>
        <p>
          <b>Let's connect!</b>
        </p>
      </section>


      {/*  */}
      <section className="contactsItemsContainer">
        <ul>
          <h2>Basic:</h2>
          <li><EnvelopeIcon_ /> <a href="mailto:hello@mateus.digital">hello@mateus.digital</a></li>
          <li><PhoneIcon_ /> <a href="tel:+5535984765140">+55 35 987 465 140</a></li>
        </ul>

        <ul>
          <h2>Professional:</h2>
          <li><GithubIcon_ /> <a href="https://github.com/mateusdigital">github.com/mateusdigital</a></li>
          <li><LinkedinIcon_ /> <a href="https://www.linkedin.com/in/mateusdigital">linkedin.com/in/mateusdigital</a></li>
          <li><YoutubeIcon_ /> <a href="https://www.youtube.com/@_mateusdigital">youtube.com/@_mateusdigital</a></li>
        </ul>

        <ul>
          <h2>Stores:</h2>
          <li><YoutubeIcon_ /> <a href="https://www.youtube.com/@_mateusdigital">youtube.com/@_mateusdigital</a></li>
          <li><VSCodeIcon_ /> <a href="https://marketplace.visualstudio.com/publishers/mateusdigital">Visual Studio Marketplace</a></li>
        </ul>

        <ul>
          <h2>Social:</h2>
          <li><TwitterIcon_ /> <a href="https://twitter.com/_mateusdigital">twitter.com/_mateusdigital</a></li>
          <li><InstagramIcon_ /> <a href="https://instagram.com/_mateusdigital_">instagram.com/_mateusdigital_</a></li>
          <li><InstagramIcon_ /> <a href="https://hackaday.io/mateusdigital">hackaday.io/mateusdigital</a></li>
        </ul>
      </section>
    </DefaultPage>
  );
}

// -----------------------------------------------------------------------------
(Contacts as any).__location = import.meta.url;
export default Contacts;
