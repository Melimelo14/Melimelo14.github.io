import pMemoize from "p-memoize";
import { NotionAPI } from "notion-client";
import { parsePageId } from "notion-utils";
import { ExtendedRecordMap, SearchParams, SearchResults } from "notion-types";

// Notion's private API now wraps each record in an extra `value` layer
// (`{ value: { value: <actual>, role: ... } }`) instead of the old
// `{ value: <actual>, role: ... }`. notion-client@6 and notion-utils@6
// still expect the old shape, so unwrap it on every response before
// any downstream code sees it.
function normalizeRecordMap(recordMap: any) {
  if (!recordMap) return;
  for (const table of [
    "block",
    "collection",
    "collection_view",
    "notion_user",
  ]) {
    const records = recordMap[table];
    if (!records) continue;
    for (const id of Object.keys(records)) {
      const record = records[id];
      if (record?.value?.value && typeof record.value.value === "object") {
        record.value = record.value.value;
      }
    }
  }
}

export const notion = new NotionAPI({
  apiBaseUrl: process.env.NOTION_API_BASE_URL,
});

async function withRetry<T>(fn: () => Promise<T>, retries = 8): Promise<T> {
  for (let attempt = 0; ; attempt++) {
    try {
      return await fn();
    } catch (err: any) {
      const status = err?.response?.statusCode ?? err?.statusCode;
      if (status !== 429 || attempt >= retries) throw err;
      // 2s, 4s, 8s, 16s, 32s, 60s, 60s, 60s — capped at 60s
      const delay = Math.min(60_000, 2000 * 2 ** attempt);
      await new Promise((r) => setTimeout(r, delay));
    }
  }
}

for (const method of ["getPageRaw", "getBlocks", "getCollectionData"] as const) {
  const original = (notion[method] as any).bind(notion);
  (notion as any)[method] = async (...args: any[]) => {
    const result: any = await withRetry(() => original(...args));
    normalizeRecordMap(result?.recordMap);
    return result;
  };
}

// Memoize by canonical UUID so getStaticPaths and getStaticProps share fetches
// (Notion otherwise rate-limits the build with 429s).
export const getPage = pMemoize(
  async (pageId: string): Promise<ExtendedRecordMap> => {
    return notion.getPage(pageId);
  },
  { cacheKey: ([pageId]) => parsePageId(pageId) || pageId }
);

export async function search(params: SearchParams): Promise<SearchResults> {
  return notion.search(params);
}
