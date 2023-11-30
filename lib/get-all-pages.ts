import pMemoize from "p-memoize";
import { getAllPagesInSpace } from "notion-utils";

import * as types from "./types";
import { includeNotionIdInUrls } from "./config";
import { notion } from "./notion";
import { getCanonicalPageId } from "./get-canonical-page-id";

const uuid = !!includeNotionIdInUrls;

export const getAllPages = pMemoize(getAllPagesImpl);

export async function getAllPagesImpl(
  rootNotionPageId: string
): Promise<Pick<types.SiteMap, "canonicalPageMap" | "pageMap">> {
  const pageMap = await getAllPagesInSpace(
    rootNotionPageId,
    // @ts-expect-error
    null,
    notion.getPage.bind(notion)
  );

  const canonicalPageMap = Object.keys(pageMap).reduce(
    (map, pageId: string) => {
      const recordMap = pageMap[pageId];
      if (!recordMap) {
        throw new Error(`Error loading page "${pageId}"`);
      }

      const canonicalPageId = getCanonicalPageId(pageId, recordMap, {
        uuid,
      });

      if (!canonicalPageId) {
        return map;
      }

      if (map[canonicalPageId]) {
        console.error(
          "error duplicate canonical page id",
          canonicalPageId,
          pageId,
          map[canonicalPageId]
        );

        return map;
      }

      map[canonicalPageId] = pageId;

      return map;
    },
    {} as { [canonicalPageId: string]: string }
  );

  return {
    pageMap,
    canonicalPageMap,
  };
}
