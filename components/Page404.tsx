import * as React from "react";
import * as types from "../lib/types";
import { SEO } from "./SEO";

import styles from "./styles.module.css";
import { PageLink } from "./PageLink";
import { CustomFont } from "./CustomFont";
import { Header } from "./Header";

export const Page404: React.FC<types.PageProps> = ({
  site,
  pageId,
  error,
  siteMap,
}) => {
  return (
    <>
      <SEO site={site} title={site?.name} />

      <CustomFont site={site} />

      <Header siteMap={siteMap} />

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
            siteMap={siteMap}
            pageId="Accueil-7f9e6130d76940deb467f36d05b17526"
            role="menuitem"
          >
            Retour à l'Accueil
          </PageLink>
        </main>
      </div>
    </>
  );
};
