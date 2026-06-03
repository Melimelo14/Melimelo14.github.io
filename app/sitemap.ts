import { getSiteMap } from "lib/get-site-map";
import type { MetadataRoute } from "next";
import { getCanonicalPageUrl } from "lib/map-page-url";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteMap = await getSiteMap();
  const canonicalUrl = getCanonicalPageUrl(siteMap.site, siteMap.pageMap);

  return Object.keys(siteMap.pageMap).map((pageId) => {
    const entry = siteMap.pageMap[pageId];
    return {
      url: canonicalUrl(pageId),
      lastModified: entry.lastEditedTime
        ? new Date(entry.lastEditedTime)
        : undefined,
      priority: entry.priority,
    };
  });
}
