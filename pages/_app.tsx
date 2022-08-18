// global styles shared across the entire site
import "styles/global.css";

// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";

// global style overrides for notion
import "styles/notion.css";
import "styles/page-accueil.css";

import React from "react";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-YN521H8YZ9`}
      />

      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YN521H8YZ9', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
