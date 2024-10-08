import * as config from "./config";
import * as types from "./types";

export function getSiteForDomain(domain: string): types.Site {
  return {
    domain,
    name: config.name,
    rootNotionPageId: config.rootNotionPageId,
    description: config.description,
    author: config.author,
  };
}
