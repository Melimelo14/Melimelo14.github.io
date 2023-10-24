import Head from "next/head";
import * as React from "react";
import * as types from "../lib/types";

export const SEO: React.FC<{
  site?: types.Site;
  children?: React.ReactNode;
  description?: string;
  image?: string;
  canonicalPageUrl?: string;
  title?: string;
}> = ({ site, children, description, image, canonicalPageUrl, title }) => {
  const fullTitle = `${site?.name}${
    site?.name && title !== "Accueil" ? " - " : ""
  }${title !== "Accueil" ? title : ""}`;
  return (
    <Head>
      <meta name="theme-color" content="#476176" />
      <meta property="og:type" content="website" />

      {fullTitle ? (
        <>
          <title>{fullTitle}</title>
          <meta property="og:title" content={fullTitle} />
          <meta name="twitter:title" content={fullTitle} />
        </>
      ) : null}

      {description || site?.description ? (
        <>
          <meta name="description" content={description || site?.description} />
          <meta
            property="og:description"
            content={description || site?.description}
          />
          <meta
            name="twitter:description"
            content={description || site?.description}
          />
        </>
      ) : null}

      {site?.name ? <meta property="og:site_name" content={site.name} /> : null}
      {site?.domain ? (
        <meta property="twitter:domain" content={site.domain} />
      ) : null}

      {image ? (
        <>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content={image} />
          <meta property="og:image" content={image} />
        </>
      ) : (
        <meta name="twitter:card" content="summary" />
      )}

      {canonicalPageUrl && (
        <>
          <link rel="canonical" href={canonicalPageUrl} />
          <meta property="og:url" content={canonicalPageUrl} />
          <meta property="twitter:url" content={canonicalPageUrl} />
        </>
      )}

      {children}
    </Head>
  );
};
