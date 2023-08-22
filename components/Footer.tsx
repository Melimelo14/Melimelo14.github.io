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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                width="30"
                viewBox="-204.79995 -341.33325 1774.9329 2047.9995"
              >
                <path
                  d="M1365.333 682.667C1365.333 305.64 1059.693 0 682.667 0 305.64 0 0 305.64 0 682.667c0 340.738 249.641 623.16 576 674.373V880H402.667V682.667H576v-150.4c0-171.094 101.917-265.6 257.853-265.6 74.69 0 152.814 13.333 152.814 13.333v168h-86.083c-84.804 0-111.25 52.623-111.25 106.61v128.057h189.333L948.4 880H789.333v477.04c326.359-51.213 576-333.635 576-674.373"
                  fill="currentColor"
                />
                <path
                  d="M948.4 880l30.267-197.333H789.333V554.609C789.333 500.623 815.78 448 900.584 448h86.083V280s-78.124-13.333-152.814-13.333c-155.936 0-257.853 94.506-257.853 265.6v150.4H402.667V880H576v477.04a687.805 687.805 0 00106.667 8.293c36.288 0 71.91-2.84 106.666-8.293V880H948.4"
                  fill="transparent"
                />
              </svg>
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
          Praticienne en soins traditionnels chinois
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
