// global styles shared across the entire site
import "styles/global.css";

// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";

// used for collection views selector (optional)
// TODO: re-add if we enable collection view dropdowns
// import 'rc-dropdown/assets/index.css'

// global style overrides for notion
import "styles/notion.css";

import React from "react";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
