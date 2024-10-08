import Head from "next/head";
import * as React from "react";
import * as types from "../lib/types";

export const SEO: React.FC<{
  site: types.Site;
  children?: React.ReactNode;
  description?: string;
  image?: string | null;
  canonicalPageUrl?: string | null;
  title?: string;
}> = ({ site, children, description, image, canonicalPageUrl, title }) => {
  const fullTitle = `${site.name}${
    site.name && title !== "Accueil" ? " - " : ""
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

      {description || site.description ? (
        <>
          <meta name="description" content={description || site.description} />
          <meta
            property="og:description"
            content={description || site.description}
          />
          <meta
            name="twitter:description"
            content={description || site.description}
          />
        </>
      ) : null}

      {site.name ? <meta property="og:site_name" content={site.name} /> : null}
      {site.domain ? (
        <meta property="twitter:domain" content={site.domain} />
      ) : null}

      <script type="application/ld+json">
        {`{
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": "${site.name}",
        "alternateName": ["Emilie Meot - Médecine Chinoise", "${site.author}"],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "995 Route du plateau d'Assy",
          "addressLocality": "Passy",
          "addressCountry": "FR",
          "postalCode": "74190"
        },
        "email": "mtc.passymontblanc@gmail.com",
        "telePhone": "+33766651550",
        "url" : "https://${site.domain}",
        "paymentAccepted": [ "cash", "check", "credit card" ],
        "openingHours": "Mo,Tu,We,Th 09:00-17:00",
        "openingHoursSpecification": [ {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday"
          ],
          "opens": "09:00",
          "closes": "17:00"
        } ],
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "45.924810",
          "longitude": "6.681120"
        },
        "priceRange":"$$"
      }`}
      </script>

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
