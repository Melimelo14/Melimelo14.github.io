import * as React from "react";
import * as types from "../lib/types";
import { PageLink } from "./PageLink";

import styles from "./Header.module.css";

export const Header: React.FC<{ site: types.Site; pageMap: types.PageMap }> = (
  props
) => {
  const { site, pageMap } = props;
  const [isNavExpanded, setIsNavExpanded] = React.useState(false);

  return (
    <header className={styles.header}>
      <PageLink
        site={site}
        pageMap={pageMap}
        pageId="Accueil-7f9e6130d76940deb467f36d05b17526"
        role="menuitem"
      >
        <h1>Médecine Traditionnelle Chinoise à Passy</h1>
      </PageLink>
      <button
        className={styles.hamburger}
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <nav
        aria-label="Main Menu"
        className={isNavExpanded ? styles.expanded : undefined}
      >
        <ul role="menubar" id="menu-mtc-main-menu">
          <li>
            <PageLink
              site={site}
              pageMap={pageMap}
              pageId="Accueil-7f9e6130d76940deb467f36d05b17526"
              role="menuitem"
            />
          </li>

          <li>
            <PageLink
              site={site}
              pageMap={pageMap}
              pageId="la-mdecine-traditionnelle-chinoise-4d3b9b280abb49d5b15152c38d8f2861"
              role="menuitem"
            />
          </li>

          <li>
            <PageLink
              site={site}
              pageMap={pageMap}
              pageId="rendez-vous-et-infos-pratiques-eca1edc0fb67400aa9073dceae1f7407"
              role="menuitem"
            />
          </li>

          <li>
            <PageLink
              site={site}
              pageMap={pageMap}
              pageId="Actualit-s-et-blog-aa2cafffdfe34e938dbcf3a60915b61b"
              role="menuitem"
            />
          </li>

          <li>
            <PageLink
              site={site}
              pageMap={pageMap}
              pageId="a-propos-3ae646cbc3804adb9e977aa25c571321"
              role="menuitem"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};
