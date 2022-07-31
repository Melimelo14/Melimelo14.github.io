import * as React from "react";
import * as types from "../lib/types";
import * as config from "../lib/config";
import { PageLink } from "./PageLink";

import styles from "./Footer.module.css";

export const Footer: React.FC<{ siteMap: types.SiteMap }> = (props) => {
  const { siteMap } = props;

  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.social}>
          {config.facebook && (
            <a
              className={styles.facebook}
              href={`https://facebook.com/${config.facebook}`}
              title={`Facebook ${config.facebook}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          )}

          {config.instagram && (
            <a
              className={styles.instagram}
              href={`https://instagram.com/${config.instagram}`}
              title={`LinkedIn ${config.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          )}
        </div>

        <div className={styles.copyright}>
          {config.author}
          <br />
          Praticienne en soins traditionnels chinois à domicile
          <br />
          {config.phone && (
            <a
              className={styles.phone}
              href={`tel:${config.phone}`}
              title={`Téléphone`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {config.phone}
            </a>
          )}
        </div>

        <div className={styles.settings}>
          <PageLink
            siteMap={siteMap}
            pageId="M-diation-protection-des-donn-es-et-mentions-l-gales-8da4703acea74082895bbeb4752c20f2"
          />
        </div>
      </div>
    </footer>
  );
};
