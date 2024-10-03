import { ExtendedRecordMap } from "notion-types";
import { parsePageId, uuidToId, getTextContent } from "notion-utils";

import { inversePageUrlOverrides, rootNotionPageId } from "./config";
import { Block } from "./types";

export function getCanonicalPageId(
  pageId: string,
  recordMap: ExtendedRecordMap,
  { uuid = true }: { uuid?: boolean } = {}
): string {
  const cleanPageId = parsePageId(pageId, { uuid: false });
  if (!cleanPageId) {
    throw new Error(`Invalid pageId "${pageId}"`);
  }

  const override = inversePageUrlOverrides[cleanPageId];
  if (override) {
    return override;
  }
  if (cleanPageId === rootNotionPageId) {
    return "";
  }

  return getCanonicalPageIdImpl(pageId, recordMap, {
    uuid,
  });
}

const getCanonicalPageIdImpl = (
  pageId: string,
  recordMap: ExtendedRecordMap,
  { uuid = true }: { uuid?: boolean } = {}
): string => {
  if (!pageId || !recordMap) throw new Error("Invalid arguments");

  const id = uuidToId(pageId);
  const block = recordMap.block[pageId]?.value;

  if (block) {
    const slug = normalizeTitle(getBlockTitle(block));

    if (slug) {
      if (uuid) {
        return `${slug}-${id}`;
      } else {
        return slug;
      }
    }
  }

  return id;
};

export function getBlockTitle(block: Block) {
  if (block.properties?.title) {
    return getTextContent(block.properties.title);
  }

  throw new Error(`Block does not have a title: ${block}`);
}

const normalizeTitle = (title?: string | null): string => {
  return (title || "")
    .replace(/ /g, "-")
    .replace(/['’]/g, "-")
    .replace(/[èéêëÈÉÊË]/g, "e")
    .replace(/[àáâäÀÁÂÄ]/g, "a")
    .replace(/[ôÔ]/g, "o")
    .replace(/[ùûÙÛ]/g, "u")
    .replace(/[çÇ]/g, "c")
    .replace(/[+]/g, "plus")
    .replace(
      /[^a-zA-Z0-9-\u4e00-\u9FFF\u3041-\u3096\u30A1-\u30FC\u3000-\u303F]/g,
      ""
    )
    .replace(/--/g, "-")
    .replace(/-$/, "")
    .replace(/^-/, "")
    .trim()
    .toLowerCase();
};
