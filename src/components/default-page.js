import Head from "next/head";
import NavBar_ from "./nav-bar";
import HeartIcon from "@/components/icons/heart-solid"

export default function DefaultPage_({ title, page_id, children }) {
  return (
    <>
      {/* ------------------------------------------------------------ */}
      <Head>
        <link rel="stylesheet" href="/css/default.css" />

        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png" />
        {/* <link rel="manifest" href="/img/favicon/site.webmanifest" /> */}

        <meta name="robots" content="all" />
        <meta charSet="UTF-8" />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="author" content="mateus-earth" />
        <meta name="description" content="Mateus Mesquita is a game programmer living in Kyiv." />

        <title>{title}</title>
      </Head>

      <NavBar_ page_id={page_id} />

      <main className={page_id}>
        {children}
      </main>

      <div className="footer">
        <hr />
        <p>
          <span className="footerCopyright">Made with <HeartIcon className="heartIcon"/> by mateus.digital at MMXXIII</span>
          <span className="footerCopyrightSmall">Licensed as GPLv3 (code) - CC-0 (data)</span>
        </p>
      </div>
    </>
  )
}
