import { getSiteMap } from "lib/get-site-map";
import type { MetadataRoute } from "next";
import { getCanonicalPageUrl } from "lib/map-page-url";
import { resolveNotionPage } from "lib/resolve-notion-page";
import { getPageProperty } from "notion-utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteMap = await getSiteMap();

  return (
    await Promise.all(
      Object.keys(siteMap.pageMap).map(async (pageId) => {
        const page = await resolveNotionPage(pageId);

        if (page.error || !page.recordMap) {
          console.error(pageId, page);
          return null;
        }

        const url = getCanonicalPageUrl(siteMap.site, siteMap.pageMap)(pageId);

        const lastModified = new Date(
          page.recordMap.block[pageId]?.value?.last_edited_time
        );

        let priority = Math.max(
          0,
          Math.min(
            1,
            parseFloat(
              getPageProperty(
                "Priority",
                page.recordMap.block[pageId].value,
                page.recordMap
              ) ?? "0.5"
            )
          )
        );

        if (isNaN(priority)) {
          priority = 0.5;
        }

        return {
          url,
          lastModified,
          priority,
        };
      })
    )
  ).filter(Boolean) as MetadataRoute.Sitemap;
}
