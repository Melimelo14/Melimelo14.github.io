/**
 * Site-wide app configuration.
 *
 * This file pulls from the root "site.config.js" as well as environment variables
 * for optional depenencies.
 */

import { parsePageId } from "notion-utils";
import { getSiteConfig, getEnv } from "./get-config-value";
import { PageUrlOverridesMap, PageUrlOverridesInverseMap } from "./types";

export const rootNotionPageId: string = parsePageId(
  getSiteConfig("rootNotionPageId"),
  { uuid: false }
);

if (!rootNotionPageId) {
  throw new Error('Config error invalid "rootNotionPageId"');
}

export const ignoredPageIds = getSiteConfig("ignoredPages", []).map(
  (id: string) => parsePageId(id, { uuid: true })
);

export const pageUrlOverrides = cleanPageUrlMap(
  getSiteConfig("pageUrlOverrides", {}) || {},
  "pageUrlOverrides"
);

export const inversePageUrlOverrides = invertPageUrlOverrides(pageUrlOverrides);

export const pageUrlAdditions = cleanPageUrlMap(
  getSiteConfig("pageUrlAdditions", {}) || {},
  "pageUrlAdditions"
);

// general site config
export const name: string = getSiteConfig("name");
export const author: string = getSiteConfig("author");
export const domain: string = getSiteConfig("domain");
export const description: string = getSiteConfig("description");

// social accounts
export const facebook: string | null = getSiteConfig("facebook", null);
export const instagram: string | null = getSiteConfig("instagram", null);
export const phone: string | null = getSiteConfig("phone", null);

// Optional image CDN host to proxy all image requests through
export const imageCDNHost: string | null = getSiteConfig("imageCDNHost", null);

export const isDev =
  process.env.NODE_ENV === "development" || !process.env.NODE_ENV;

// where it all starts -- the site's root Notion page
export const includeNotionIdInUrls: boolean = getSiteConfig(
  "includeNotionIdInUrls",
  !!isDev
);

// ----------------------------------------------------------------------------

export const isServer = typeof window === "undefined";

export const port = getEnv("PORT", "3000");
export const host = isDev ? `http://localhost:${port}` : `https://${domain}`;

// ----------------------------------------------------------------------------

function cleanPageUrlMap(
  pageUrlMap: PageUrlOverridesMap,
  label: string
): PageUrlOverridesMap {
  return Object.keys(pageUrlMap).reduce((acc, uri) => {
    const pageId = pageUrlMap[uri];
    const uuid = parsePageId(pageId, { uuid: false });

    if (!uuid) {
      throw new Error(`Invalid ${label} page id "${pageId}"`);
    }

    if (!uri) {
      throw new Error(`Missing ${label} value for page "${pageId}"`);
    }

    if (!uri.startsWith("/")) {
      throw new Error(
        `Invalid ${label} value for page "${pageId}": value "${uri}" should be a relative URI that starts with "/"`
      );
    }

    const path = uri.slice(1);

    return {
      ...acc,
      [path]: uuid,
    };
  }, {});
}

function invertPageUrlOverrides(
  pageUrlOverrides: PageUrlOverridesMap
): PageUrlOverridesInverseMap {
  return Object.keys(pageUrlOverrides).reduce((acc, uri) => {
    const pageId = pageUrlOverrides[uri];

    return {
      ...acc,
      [pageId]: uri,
    };
  }, {});
}
