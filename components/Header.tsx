import * as React from "react";
import * as types from "../lib/types";
import { PageLink } from "./PageLink";

import styles from "./Header.module.css";

export const Header: React.FC<{ siteMap: types.SiteMap }> = (props) => {
  const { siteMap } = props;

  return (
    <header className={styles.header}>
      <h1>
        Soins Traditionnels Chinois - Emilie Meot
      </h1>
      <nav aria-label="Main Menu">
        <ul role="menubar" id="menu-mtc-main-menu">
          <li>
            <PageLink
              siteMap={siteMap}
              pageId="Accueil-7f9e6130d76940deb467f36d05b17526"
              role="menuitem"
            />
          </li>
          <li>
            <PageLink
              siteMap={siteMap}
              pageId="Qu-est-ce-que-la-MTC-4d3b9b280abb49d5b15152c38d8f2861"
              role="menuitem"
            />
          </li>

          <li>
            <PageLink
              siteMap={siteMap}
              pageId="Votre-s-ance-de-MTC-149d56a203c54e30b9dadfd2ad65b81f"
              role="menuitem"
            />
          </li>
          
          <li>
            <PageLink
              siteMap={siteMap}
              pageId="Rdv-et-infos-pratiques-eca1edc0fb67400aa9073dceae1f7407"
              role="menuitem"
            />
          </li>
                    
          <li>
            <PageLink
              siteMap={siteMap}
              pageId="Qui-suis-je-3ae646cbc3804adb9e977aa25c571321"
              role="menuitem"
            />
          </li>
          
          <li>
            <PageLink
              siteMap={siteMap}
              pageId="FAQ-5eae3a3d58e940388866a51e3a01c2a8"
              role="menuitem"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};
