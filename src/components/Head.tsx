export default function Head() {
  const title = "Mateus Mesquita - Game Programmer";

  return (
    <head>
      <link rel="stylesheet" href="/css/default.css" />

      {/* <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png" /> */}
      {/* <link rel="manifest" href="/img/favicon/site.webmanifest" /> */}

      {/* Basic SEO */}
      <meta name="robots" content="index, follow" />
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="mateusdigital" />
      <meta name="description" content="Mateus Mesquita is a game programmer living in Brasil." />
      <meta name="keywords" content="game programmer, mateusdigital, Mateus Mesquita, game development, retro, programming portfolio" />

      {/* Open Graph (OG) for social sharing */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content="Mateus Mesquita is a game programmer living in Brasil." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mateus.digital" />
      {/* @TODO: Add images*/}
      {/* <meta property="og:image" content="https://mateus.digital/img/og-image.png" /> */}
      <meta property="og:locale" content="en_US" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content="Mateus Mesquita is a game programmer living in Brasil." />
      {/* @TODO: Add images */}
      {/* <meta name="twitter:image" content="https://yourwebsite.com/img/twitter-image.png" /> */}
      <meta name="twitter:site" content="@_mateusdigital_" />
      <meta name="twitter:creator" content="@_mateusdigital_" />

      {/* Additional meta tags */}
      <meta name="theme-color" content="#000000" />
      <meta name="application-name" content="mateus.digital" />
      <meta name="apple-mobile-web-app-title" content="mateus.digital" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      <title>{title}</title>
    </head>
  );
}