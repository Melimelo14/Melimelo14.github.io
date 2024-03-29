import React from "react";
import { GetStaticProps } from "next";
import { domain } from "../lib/config";
import { getSiteMap } from "../lib/get-site-map";
import { resolveNotionPage } from "../lib/resolve-notion-page";
import { PageProps } from "../lib/types";
import { NotionPage } from "../components";

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
  const rawPageId = context.params?.pageId;

  try {
    if (!rawPageId || Array.isArray(rawPageId)) {
      throw new Error(`Failed to resolve pageId`);
    }
    const props = await resolveNotionPage(rawPageId);

    return {
      props,
    };
  } catch (err) {
    console.error("page error", domain, rawPageId, err);

    // we don't want to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed
    throw err;
  }
};

export async function getStaticPaths() {
  const siteMap = await getSiteMap();

  const ret = {
    paths: Object.keys(siteMap.canonicalPageMap).map((pageId) => ({
      params: {
        pageId,
      },
    })),
    fallback: false,
  };

  return ret;
}

export default function NotionDomainDynamicPage(props: PageProps) {
  return <NotionPage {...props} />;
}
