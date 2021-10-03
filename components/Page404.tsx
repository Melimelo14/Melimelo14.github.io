import * as React from "react";
import * as types from "../lib/types";
import { SEO } from "./SEO";

import styles from "./styles.module.css";

export const Page404: React.FC<types.PageProps> = ({ site, pageId, error }) => {
  return (
    <>
      <SEO site={site} title={site?.name || "Notion Page Not Found"} />

      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Notion Page Not Found</h1>

          {error ? (
            <p>{error.message}</p>
          ) : (
            pageId && (
              <p>
                Make sure that Notion page "{pageId}" is publicly accessible.
              </p>
            )
          )}

          <img
            src="/404.png"
            alt="404 Not Found"
            className={styles.errorImage}
          />
        </main>
      </div>
    </>
  );
};
