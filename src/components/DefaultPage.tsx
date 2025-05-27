import Head from "../components/Head";
import NavBar from "../components/NavBar";
// @ts-ignore
import HeartIcon from "./icons/heart-solid"


type DefaultPageProps = {
  title?: string;
  pageId: string;
  children: any;
};

export default function DefaultPage({ title, pageId, children }: DefaultPageProps) {
  return (<>
    {/* Head */}
    <Head />

    <div className="container">
      {/* NavBar */}
      <NavBar pageId={pageId} />

      {/* Main */}
      <main className={pageId}>
        {children}
      </main>

      {/* Footer */}
      <div className="footer">
        <hr />
        <br />
        <span className="footerCopyright">Made with <HeartIcon className="heartIcon" /> by mateus.digital at 2023-2025</span>
        <br />
        <span className="footerCopyrightSmall">Licensed as GPLv3 (code) - CC-0 (data)</span>
      </div>

    </div>

    {/* Scripts */}
    <script src="/src/MenuController.js" async></script>
    <script data-collect-dnt="true" async src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
  </>
  )
}
