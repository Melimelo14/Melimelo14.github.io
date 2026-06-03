import pMemoize from "p-memoize";
import {
  getAllPagesInSpace,
  getBlockValue,
  getPageProperty,
  getTextContent,
} from "notion-utils";

import { PageMap } from "./types";
import { includeNotionIdInUrls, ignoredPageIds } from "./config";
import { getPage } from "./notion";
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
    getPage,
    { concurrency: 1 }
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

    const block = getBlockValue(recordMap.block[pageId]);
    if (!block) {
      throw new Error(`Missing block for page "${pageId}"`);
    }
    let priority = parseFloat(
      getPageProperty("Priority", block, recordMap) ?? "0.5"
    );
    if (isNaN(priority)) priority = 0.5;
    priority = Math.max(0, Math.min(1, priority));

    prev[pageId] = {
      canonicalPath: canonicalPageId,
      title: getTextContent(block.properties?.title).trim(),
      lastEditedTime: block.last_edited_time,
      priority,
    };
    return prev;
  }, {} as PageMap);
}
