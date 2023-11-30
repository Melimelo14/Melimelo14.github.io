import { parsePageId } from "notion-utils";

import * as acl from "./acl";
import * as types from "./types";
import { pageUrlOverrides, pageUrlAdditions } from "./config";
import { getPage } from "./notion";
import { getSiteMap } from "./get-site-map";
import * as config from "./config";

export async function resolveNotionPage(
  rawPageId?: string
): Promise<types.PageProps> {
  let pageId: string;

  const { site, pageMap, canonicalPageMap } = await getSiteMap();

  if (rawPageId && rawPageId !== "index" && rawPageId !== config.domain) {
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
      pageId = canonicalPageMap[rawPageId];

      if (!pageId) {
        return {
          error: {
            message: `Not found "${rawPageId}"`,
            statusCode: 404,
          },
          site,
          pageMap,
          recordMap: null,
        };
      }
    }
  } else {
    pageId = site.rootNotionPageId;
  }

  const recordMap = (await getPage(pageId)) || null;

  const props = { site, recordMap, pageId, pageMap };
  return { ...props, ...acl.pageAcl(props) };
}
