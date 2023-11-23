import { parsePageId } from "notion-utils";
import { ExtendedRecordMap } from "notion-types";

import * as acl from "./acl";
import * as types from "./types";
import { pageUrlOverrides, pageUrlAdditions } from "./config";
import { getPage } from "./notion";
import { getSiteMaps } from "./get-site-maps";
import { getSiteForDomain } from "./get-site-for-domain";

export async function resolveNotionPage(
  domain: string,
  rawPageId?: string
): Promise<types.PageProps> {
  let pageId: string;

  const [siteMaps, site] = await Promise.all([
    getSiteMaps(),
    getSiteForDomain(domain),
  ]);
  const siteMap = siteMaps[0];

  if (rawPageId && rawPageId !== "index") {
    pageId = parsePageId(rawPageId);

    if (!pageId) {
      // check if the site configuration provides an override of a fallback for
      // the page's URI
      const override =
        pageUrlOverrides[rawPageId] || pageUrlAdditions[rawPageId];

      if (override) {
        pageId = parsePageId(override);
      }
    }

    if (!pageId) {
      // handle mapping of user-friendly canonical page paths to Notion page IDs
      // e.g., /developer-x-entrepreneur versus /71201624b204481f862630ea25ce62fe
      pageId = siteMap?.canonicalPageMap[rawPageId];

      if (!pageId) {
        return {
          error: {
            message: `Not found "${rawPageId}"`,
            statusCode: 404,
          },
          site,
          pageMap: siteMap?.pageMap,
          recordMap: undefined,
        };
      }
    }
  } else {
    pageId = site.rootNotionPageId;
  }

  const recordMap = await getPage(pageId);

  const props = { site, recordMap, pageId, pageMap: siteMap?.pageMap };
  return { ...props, ...acl.pageAcl(props) };
}
