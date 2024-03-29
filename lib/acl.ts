import { PageProps } from "./types";

export function pageAcl({
  site,
  recordMap,
  pageId,
}: Partial<PageProps>): Pick<PageProps, "error"> {
  if (!site) {
    return {
      error: {
        statusCode: 404,
        message: "Unable to resolve notion site",
      },
    };
  }

  if (!recordMap) {
    return {
      error: {
        statusCode: 404,
        message: `Unable to resolve page for domain "${site.domain}". Notion page "${pageId}" not found.`,
      },
    };
  }

  const keys = Object.keys(recordMap.block);
  const rootKey = keys[0];

  if (!rootKey) {
    return {
      error: {
        statusCode: 404,
        message: `Unable to resolve page for domain "${site.domain}". Notion page "${pageId}" invalid data.`,
      },
    };
  }

  return {};
}
