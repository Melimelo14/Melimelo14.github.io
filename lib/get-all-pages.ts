import pMemoize from "p-memoize";
import { getAllPagesInSpace, getTextContent } from "notion-utils";

import { PageMap } from "./types";
import { includeNotionIdInUrls, ignoredPageIds } from "./config";
import { notion } from "./notion";
import { getCanonicalPageId } from "./get-canonical-page-id";

const uuid = !!includeNotionIdInUrls;

export const getAllPages = pMemoize(getAllPagesImpl);

export async function getAllPagesImpl(
  rootNotionPageId: string
): Promise<PageMap> {
  const pageMap = await getAllPagesInSpace(
    rootNotionPageId,
    // @ts-expect-error
    null,
    notion.getPage.bind(notion)
  );

  ignoredPageIds.forEach((id) => {
    delete pageMap[id];
  });

  return Object.keys(pageMap).reduce((prev, pageId) => {
    const recordMap = pageMap[pageId];
    if (!recordMap) {
      throw new Error(`Error loading page "${pageId}"`);
    }

    const canonicalPageId = getCanonicalPageId(pageId, recordMap, {
      uuid,
    });

    if (Object.values(prev).find((x) => x.canonicalPath === canonicalPageId)) {
      throw new Error(`Error duplicate canonical page id "${canonicalPageId}"`);
    }

    prev[pageId] = {
      canonicalPath: canonicalPageId,
      title: getTextContent(
        recordMap.block[pageId].value.properties.title
      ).trim(),
    };
    return prev;
  }, {} as PageMap);
}
