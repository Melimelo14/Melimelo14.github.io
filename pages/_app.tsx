// global styles shared across the entire site
import "styles/global.css";

// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";

// global style overrides for notion
import "styles/notion.css";
import "styles/page-accueil.css";
import "styles/page-quest-ce-que-la-mtc.css";

import React from "react";
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <GoogleAnalytics trackPageViews gaMeasurementId="G-S1DD2Z5TF0" />
      <Component {...pageProps} />
    </>
  );
}
