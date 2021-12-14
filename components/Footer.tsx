import * as React from "react";
import * as config from "../lib/config";

import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
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
          Praticienne en MTC à domicile
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

        <div className={styles.settings}>Mentions légales</div>
      </div>
    </footer>
  );
};
