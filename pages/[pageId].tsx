import React from "react";
import { isDev, domain } from "../lib/config";
import { getSiteMaps } from "../lib/get-site-maps";
import { resolveNotionPage } from "../lib/resolve-notion-page";
import { NotionPage } from "../components";

const redirects = {
  "/bdd": {
    destination:
      "https://airtable.com/appG8lQsyJDK5caMZ/tblNbvBoTs6r1GvQC/viw1v0UNpjhP2tzrD?blocks=bip72ZLPOmL1NPRZ8",
    basePath: false,
    permanent: false,
  },
  "/rdv-et-infos-pratiques": {
    destination: "/rendez-vous-et-infos-pratiques",
    permanent: true,
  },
  "/qu-est-ce-que-la-mtc": {
    destination: "/quest-ce-que-la-medecine-traditionnelle-chinoise",
    permanent: true,
  },
  "/qui-suis-je": {
    destination: "/a-propos",
    permanent: true,
  },
  "/votre-soin-individualise": {
    destination: "/rendez-vous-et-infos-pratiques",
    permanent: true,
  },
};

export const getStaticProps = async (context) => {
  const rawPageId = context.params.pageId as string;

  const redirect = redirects[rawPageId];
  if (redirect) {
    return {
      redirect,
    };
  }

  try {
    const props = await resolveNotionPage(domain, rawPageId);

    return {
      props,
      revalidate: 10,
    };
  } catch (err) {
    console.error("page error", domain, rawPageId, err);

    // we don't want to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed
    throw err;
  }
};

export async function getStaticPaths() {
  if (isDev) {
    return {
      paths: [],
      fallback: true,
    };
  }

  const siteMaps = await getSiteMaps();

  const ret = {
    paths: siteMaps
      .flatMap((siteMap) =>
        Object.keys(siteMap.canonicalPageMap).map((pageId) => ({
          params: {
            pageId,
          },
        }))
      )
      .concat(Object.keys(redirects).map((k) => ({ params: { pageId: k } }))),
    fallback: false,
  };

  return ret;
}

export default function NotionDomainDynamicPage(props) {
  return <NotionPage {...props} />;
}
