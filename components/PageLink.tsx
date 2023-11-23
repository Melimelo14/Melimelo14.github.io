import * as React from "react";
import Link from "next/link";
import { parsePageId, getBlockTitle } from "notion-utils";
import { mapPageUrl } from "../lib/map-page-url";
import * as types from "../lib/types";

export const PageLink: React.FC<
  {
    site: types.Site;
    pageMap: types.PageMap;
    pageId: string;
    children?: React.ReactNode;
  } & React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
> = (props) => {
  const { site, pageMap, pageId, ref, children, ...rest } = props;
  const uuid = parsePageId(pageId);

  const recordMap = pageMap[uuid];

  if (!recordMap) {
    throw new Error(`Failed to find page "${pageId}" in site map`);
  }

  const siteMapPageUrl = mapPageUrl(site, recordMap, new URLSearchParams());

  return (
    <Link href={siteMapPageUrl(uuid)} {...rest}>
      {children ?? getBlockTitle(recordMap.block[uuid].value, recordMap)}
    </Link>
  );
};
