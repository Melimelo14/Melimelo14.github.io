import * as React from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import * as config from "../lib/config";

import styles from "./styles.module.css";

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>Copyright 2021 {config.author}</div>

      <div className={styles.social}>
        {config.twitter && (
          <a
            className={styles.twitter}
            href={`https://twitter.com/${config.twitter}`}
            title={`Twitter @${config.twitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        )}

        {config.linkedin && (
          <a
            className={styles.linkedin}
            href={`https://www.linkedin.com/in/${config.linkedin}`}
            title={`LinkedIn ${config.author}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        )}
      </div>
    </footer>
  );
};
