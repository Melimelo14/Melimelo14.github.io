import { uuidToId, parsePageId } from "notion-utils";

import { Site, PageMap } from "./types";

export const mapPageUrl =
  (site: Site, pageMap: PageMap, searchParams: URLSearchParams) =>
  (pageId = "") => {
    const pageUuid = parsePageId(pageId, { uuid: true });

    if (uuidToId(pageId) === site.rootNotionPageId) {
      return createUrl("/", searchParams);
    } else {
      const canonicalPath = pageMap[pageUuid]?.canonicalPath;
      return createUrl(`/${canonicalPath}`, searchParams);
    }
  };

export const getCanonicalPageUrl =
  (site: Site, pageMap: PageMap) =>
  (pageId = "") => {
    const pageUuid = parsePageId(pageId, { uuid: true });

    if (uuidToId(pageId) === site.rootNotionPageId) {
      return `https://${site.domain}`;
    } else {
      const canonicalPath = pageMap[pageUuid]?.canonicalPath;
      if (!canonicalPath) {
        throw new Error(`Failed to find canonical page path for "${pageId}"`);
      }
      return `https://${site.domain}/${canonicalPath}`;
    }
  };

function createUrl(path: string, searchParams: URLSearchParams) {
  return [path, searchParams.toString()].filter(Boolean).join("?");
}
