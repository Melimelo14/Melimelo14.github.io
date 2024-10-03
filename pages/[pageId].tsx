import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import { domain, redirects } from "../lib/config";
import { getSiteMap } from "../lib/get-site-map";
import { resolveNotionPage } from "../lib/resolve-notion-page";
import { PageProps } from "../lib/types";
import { NotionPage } from "../components";

export const getStaticProps: GetStaticProps<
  PageProps | { redirect: string }
> = async (context) => {
  const rawPageId = context.params?.pageId;

  try {
    if (!rawPageId || Array.isArray(rawPageId)) {
      throw new Error(`Failed to resolve pageId`);
    }

    if (typeof redirects[rawPageId] !== "undefined") {
      return {
        props: { redirect: redirects[rawPageId] },
      };
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
    paths: Object.values(siteMap.pageMap)
      // filter out the root page
      .filter((page) => page.canonicalPath)
      .map((page) => ({
        params: {
          pageId: page.canonicalPath,
        },
      }))
      .concat(
        Object.keys(redirects).map((redirect) => ({
          params: {
            pageId: redirect,
          },
        }))
      ),
    fallback: false,
  };

  return ret;
}

export default function Page(props: PageProps | { redirect: string }) {
  if ("redirect" in props) {
    return (
      <>
        <Head>
          <title>Redirecting...</title>
          <link rel="canonical" href={`/${props.redirect}`} />
          <meta http-equiv="refresh" content={`0; url=/${props.redirect}`} />
        </Head>
        <p>Redirecting...</p>
      </>
    );
  }
  return <NotionPage {...props} />;
}
