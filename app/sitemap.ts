import { getSiteMap } from "lib/get-site-map";
import type { MetadataRoute } from "next";
import { getCanonicalPageUrl } from "lib/map-page-url";
import { resolveNotionPage } from "lib/resolve-notion-page";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteMap = await getSiteMap();

  return (
    await Promise.all(
      Object.entries(siteMap.canonicalPageMap).map(async ([path, pageId]) => {
        const page = await resolveNotionPage(pageId);

        if (page.error || !page.recordMap) {
          console.error(path, page);
          return null;
        }

        const url = getCanonicalPageUrl(siteMap.site, page.recordMap)(pageId);

        const lastModified = new Date(
          page.recordMap.block[pageId]?.value?.last_edited_time
        );

        return {
          url,
          lastModified,
        };
      })
    )
  ).filter(Boolean) as MetadataRoute.Sitemap;
}
