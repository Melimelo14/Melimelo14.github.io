import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import cs from "classnames";
import { useRouter } from "next/router";
import { PageBlock } from "notion-types";
import Cal, { getCalApi } from "@calcom/embed-react";
import { event } from "nextjs-google-analytics";

// core notion renderer
import { NotionRenderer } from "react-notion-x";

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
import { SEO } from "./SEO";
import { Footer } from "./Footer";
import { Header } from "./Header";
// import { Collection } from "./NotionCollection";

import styles from "./styles.module.css";

// const Code = dynamic(() =>
//   import('react-notion-x').then((notion) => notion.Code)
// )
//
const Collection = dynamic(() =>
  import("react-notion-x/build/third-party/collection").then(
    (m) => m.Collection
  )
);
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

// const Modal = dynamic(
//   () => import("react-notion-x").then((notion) => notion.Modal),
//   { ssr: false }
// );

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

  React.useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#4c6074" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
      cal("on", {
        action: "eventTypeSelected",
        callback: (data) => {
          event("select_event_type", {
            // @ts-ignore
            type: String(data.detail?.data?.eventType),
          });
        },
      });
      cal("on", {
        action: "bookingSuccessful",
        callback: (data) => {
          event("booking_successful", {
            // @ts-ignore
            type: String(data.detail?.data?.eventType),
          });
        },
      });
    })();
  }, []);

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

  if (process.env.NODE_ENV !== "production") {
    console.log("notion page", {
      isDev: config.isDev,
      title,
      pageId,
      rootNotionPageId: site.rootNotionPageId,
      recordMap,
    });
  }

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
      <SEO
        site={site}
        title={title}
        description={socialDescription}
        image={socialImage}
        canonicalPageUrl={canonicalPageUrl}
      />

      <CustomFont site={site} />

      <Header siteMap={siteMap} />

      <NotionRenderer
        bodyClassName={cs(styles.notion)}
        components={{
          nextImage: Image,
          nextLink: Link,
          Collection,
          Embed: (props) => {
            if (
              props.block?.properties?.source?.[0]?.[0] ===
              "https://cal.com/mtc-passy-mont-blanc"
            ) {
              return (
                <Cal
                  calLink="mtc-passy-mont-blanc"
                  style={{ width: "100%", height: "auto", overflow: "scroll" }}
                />
              );
            }
            console.log("embed", props);
            return null;
          },
          // PageLink: ({
          //   href,
          //   as,
          //   passHref,
          //   prefetch,
          //   replace,
          //   scroll,
          //   shallow,
          //   locale,
          //   ...props
          // }) => (
          //   <Link
          //     href={href}
          //     as={as}
          //     passHref={passHref}
          //     prefetch={prefetch}
          //     replace={replace}
          //     scroll={scroll}
          //     shallow={shallow}
          //     locale={locale}
          //   >
          //     <a {...props} />
          //   </Link>
          // ),
          // code: Code,
          // collection: (props) => (
          //   <Collection {...props} recordMap={recordMap} />
          // ),
          // collectionRow: CollectionRow,
          // modal: Modal,
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
        pageHeader={null}
        pageFooter={null}
      />
      <Footer siteMap={siteMap} />
    </>
  );
};
