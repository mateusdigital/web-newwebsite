import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link href="/css/main.css" rel="stylesheet" type="text/css" />

                <link rel="apple-touch-icon"      sizes="180x180" href="/img/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32"   href="/img/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16"   href="/img/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/img/favicon/site.webmanifest" />

                <meta name="robots" content="all" />
                <meta charset="UTF-8" />

                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <meta name="author" content="mateus-earth" />
                <meta name="description" content="Mateus Mesquita is a game programmer living in Brazil." />

                <title></title>

                <Script src="/src/main.js" />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
