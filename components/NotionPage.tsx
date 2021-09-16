import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import cs from "classnames";
import { useRouter } from "next/router";
import { PageBlock } from "notion-types";

// core notion renderer
import {
  NotionRenderer,
  Code,
  Collection,
  CollectionRow,
} from "react-notion-x";

// utils
import { getBlockTitle } from "notion-utils";
import { mapPageUrl, getCanonicalPageUrl } from "../lib/map-page-url";
import { mapNotionImageUrl } from "../lib/map-image-url";
import { getPageDescription } from "../lib/get-page-description";
import * as types from "../lib/types";
import * as config from "../lib/config";

// components
import { CustomFont } from "./CustomFont";
import { Loading } from "./Loading";
import { Page404 } from "./Page404";
import { PageHead } from "./PageHead";
import { Footer } from "./Footer";
import { Header } from "./Header";

import styles from "./styles.module.css";

// const Code = dynamic(() =>
//   import('react-notion-x').then((notion) => notion.Code)
// )
//
// const Collection = dynamic(() =>
//   import('react-notion-x').then((notion) => notion.Collection)
// )
//
// const CollectionRow = dynamic(
//   () => import('react-notion-x').then((notion) => notion.CollectionRow),
//   {
//     ssr: false
//   }
// )

// const Pdf = dynamic(() =>
//   import("react-notion-x").then((notion) => notion.Pdf)
// );

// const Equation = dynamic(() =>
//   import("react-notion-x").then((notion) => notion.Equation)
// );

// we're now using a much lighter-weight tweet renderer react-static-tweets
// instead of the official iframe-based embed widget from twitter
// const Tweet = dynamic(() => import('react-tweet-embed'))

const Modal = dynamic(
  () => import("react-notion-x").then((notion) => notion.Modal),
  { ssr: false }
);

export const NotionPage: React.FC<types.PageProps> = ({
  site,
  recordMap,
  siteMap,
  error,
  pageId,
}) => {
  const router = useRouter();

  const params: any = {};

  const searchParams = new URLSearchParams(params);

  if (router.isFallback) {
    return <Loading />;
  }

  const keys = Object.keys(recordMap?.block || {});
  const page = recordMap?.block?.[keys[0]]?.value as PageBlock;

  if (error || !site || !keys.length || !page) {
    return (
      <Page404 site={site} pageId={pageId} error={error} siteMap={siteMap} />
    );
  }

  const title = getBlockTitle(page, recordMap) || site.name;

  console.log("notion page", {
    isDev: config.isDev,
    title,
    pageId,
    rootNotionPageId: site.rootNotionPageId,
    recordMap,
  });

  if (!config.isServer) {
    // add important objects to the window global for easy debugging
    const g = window as any;
    g.pageId = pageId;
    g.recordMap = recordMap;
    g.block = page;
  }

  const siteMapPageUrl = mapPageUrl(site, recordMap, searchParams);

  const canonicalPageUrl =
    !config.isDev && getCanonicalPageUrl(site, recordMap)(pageId);

  // const isRootPage =
  //   parsePageId(block.id) === parsePageId(site.rootNotionPageId)

  const socialImage = mapNotionImageUrl(
    page.format?.page_cover || config.defaultPageCover,
    page
  );

  const socialDescription =
    getPageDescription(page, recordMap) ?? config.description;

  page.properties = { title: [[title]] };

  return (
    <>
      <PageHead site={site} />

      <Head>
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={site.name} />

        <meta name="twitter:title" content={title} />
        <meta property="twitter:domain" content={site.domain} />

        {config.twitter && (
          <meta name="twitter:creator" content={`@${config.twitter}`} />
        )}

        {socialDescription && (
          <>
            <meta name="description" content={socialDescription} />
            <meta property="og:description" content={socialDescription} />
            <meta name="twitter:description" content={socialDescription} />
          </>
        )}

        {socialImage ? (
          <>
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={socialImage} />
            <meta property="og:image" content={socialImage} />
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

        <title>{title}</title>
      </Head>

      <CustomFont site={site} />

      <NotionRenderer
        bodyClassName={cs(styles.notion)}
        components={{
          pageLink: ({
            href,
            as,
            passHref,
            prefetch,
            replace,
            scroll,
            shallow,
            locale,
            ...props
          }) => (
            <Link
              href={href}
              as={as}
              passHref={passHref}
              prefetch={prefetch}
              replace={replace}
              scroll={scroll}
              shallow={shallow}
              locale={locale}
            >
              <a {...props} />
            </Link>
          ),
          code: Code,
          collection: Collection,
          collectionRow: CollectionRow,
          modal: Modal,
        }}
        recordMap={recordMap}
        rootPageId={site.rootNotionPageId}
        previewImages={site.previewImages !== false}
        showCollectionViewDropdown={false}
        defaultPageIcon={config.defaultPageIcon}
        defaultPageCover={config.defaultPageCover}
        defaultPageCoverPosition={config.defaultPageCoverPosition}
        mapPageUrl={siteMapPageUrl}
        mapImageUrl={mapNotionImageUrl}
        pageHeader={<Header siteMap={siteMap} />}
        pageFooter={<Footer />}
      />
    </>
  );
};
