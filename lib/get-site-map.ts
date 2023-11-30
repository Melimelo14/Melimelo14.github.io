import { getAllPages } from "./get-all-pages";
import * as config from "./config";
import * as types from "./types";
import { getSiteForDomain } from "./get-site-for-domain";

export async function getSiteMap(): Promise<types.SiteMap> {
  const site = getSiteForDomain(config.domain);

  return {
    site,
    ...(await getAllPages(site.rootNotionPageId)),
  };
}
