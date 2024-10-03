import * as React from "react";
import * as types from "../lib/types";
import { SEO } from "./SEO";

import styles from "./styles.module.css";
import { PageLink } from "./PageLink";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Page404: React.FC<{
  pageId?: string;
  site: types.Site;
  pageMap: types.PageMap;
  error?: types.PageError;
}> = ({ site, pageMap, pageId, error }) => {
  return (
    <>
      <SEO site={site} />

      <Header site={site} pageMap={pageMap} />

      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Page Not Found</h1>

          {error ? (
            <p>{error.message}</p>
          ) : (
            pageId && (
              <p>
                Make sure that Notion page "{pageId}" is publicly accessible.
              </p>
            )
          )}

          {/* <img
            src="/404.png"
            alt="404 Not Found"
            className={styles.errorImage}
          /> */}

          <PageLink
            site={site}
            pageMap={pageMap}
            pageId="Accueil-7f9e6130d76940deb467f36d05b17526"
            role="menuitem"
          >
            Retour à l'Accueil
          </PageLink>
        </main>
      </div>
      <Footer site={site} pageMap={pageMap} />
    </>
  );
};
