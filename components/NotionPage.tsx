import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import cs from "classnames";
import { useRouter } from "next/router";
import { PageBlock } from "notion-types";
import Cal, { getCalApi } from "@calcom/embed-react";
import { AppleMap } from "./Map";
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
import { Loading } from "./Loading";
import { Page404 } from "./Page404";
import { SEO } from "./SEO";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Testimonials } from "./Testimonials";

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
  pageMap,
  recordMap,
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

  if (error || !recordMap || !keys.length || !page) {
    return (
      <Page404
        site={site}
        pageId={pageId}
        error={error}
        recordMap={recordMap}
        pageMap={pageMap}
      />
    );
  }

  const title = getBlockTitle(page, recordMap) || site.name;

  if (config.isDev) {
    console.log("notion page", {
      isDev: config.isDev,
      title,
      pageId,
      rootNotionPageId: site.rootNotionPageId,
      recordMap,
    });
  }

  if (!config.isServer && config.isDev) {
    // add important objects to the window global for easy debugging
    const g = window as any;
    g.pageId = pageId;
    g.recordMap = recordMap;
    g.block = page;
  }

  const siteMapPageUrl = mapPageUrl(site, recordMap, searchParams);

  const canonicalPageUrl = !config.isDev
    ? getCanonicalPageUrl(site, recordMap)(pageId)
    : undefined;

  const socialImage = mapNotionImageUrl(page.format?.page_cover, page);

  const socialDescription =
    getPageDescription(page, recordMap) ?? config.description;

  page.properties = { title: [[title]], Description: [[socialDescription]] };

  return (
    <>
      <SEO
        site={site}
        title={title}
        description={socialDescription}
        image={socialImage}
        canonicalPageUrl={canonicalPageUrl}
      />

      <Header site={site} pageMap={pageMap} />

      <NotionRenderer
        bodyClassName={cs(styles.notion)}
        components={{
          nextImage: Image,
          nextLink: Link,
          Collection: (props: any) => {
            if (
              props.block?.collection_id ===
              "b038533a-5aae-4423-bb02-1f4b60681450"
            ) {
              return <Testimonials {...props} />;
            }
            return <Collection {...props} />;
          },
          Embed: (props: any) => {
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
            if (
              props.block?.properties?.source?.[0]?.[0] ===
              "https://maps.app.goo.gl/4SLAhoq8NFsDuEjj7"
            ) {
              return (
                <React.Suspense>
                  <AppleMap />
                </React.Suspense>
              );
            }
            return null;
          },
          PageLink: Link,
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
        showCollectionViewDropdown={false}
        mapPageUrl={siteMapPageUrl}
        // @ts-expect-error
        mapImageUrl={mapNotionImageUrl}
        pageHeader={null}
        pageFooter={null}
      />
      <Footer site={site} pageMap={pageMap} />
    </>
  );
};
