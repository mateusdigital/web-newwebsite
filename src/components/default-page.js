import Head from "next/head";
import Script from "next/script";

import Link_ from "@/components/link";

export default function DefaultPage_({page, children}) {
    const page_title = `${page} - mateus-earth`;

    return (
        <>
            {/* ------------------------------------------------------------ */}
            <Head>
                <link href="/css/main.css" rel="stylesheet" type="text/css" />

                <link rel="apple-touch-icon"      sizes="180x180" href="/img/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32"   href="/img/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16"   href="/img/favicon/favicon-16x16.png" />
                {/* <link rel="manifest" href="/img/favicon/site.webmanifest" /> */}

                <meta name="robots" content="all" />
                <meta charSet="UTF-8" />

                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <meta name="author" content="mateus-earth" />
                <meta name="description" content="Mateus Mesquita is a game programmer living in Kyiv." />

                {/* @todo: Add title */}
                <title>{page_title}</title>

                <Script src="/src/main.js" defer/>
            </Head>


            {/* ------------------------------------------------------------ */}
            <nav>
                <div>
                    <Link_ href="/">mateus-earth</Link_>
                </div>
                    <div>
                        <Link_ active={"games"    == page} href="/games">Games</Link_>
                        <Link_ active={"projects" == page} href="/projects">Projects</Link_>
                        <Link_ active={"blog"     == page} href="/blog">Blog</Link_>
                        <Link_ active={"resume"   == page} href="/resume">Resume</Link_>
                        <Link_ active={"about"    == page} href="/about" >About</Link_>

                        <Link_ href="/about" >☰&nbsp;</Link_>
                    </div>
            </nav>


            {/* ------------------------------------------------------------ */}
            <main className={page}>
                {children}
            </main>
        </>
    )
}
