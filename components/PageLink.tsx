import * as React from "react";
import Link from "next/link";
import { parsePageId, getBlockTitle } from "notion-utils";
import { mapPageUrl } from "../lib/map-page-url";
import * as types from "../lib/types";

export const PageLink: React.FC<
  {
    siteMap: types.SiteMap;
    pageId: string;
    children?: React.ReactNode;
  } & React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
> = (props) => {
  const { siteMap, pageId, ref, children, ...rest } = props;
  const uuid = parsePageId(pageId);
  const siteMapPageUrl = mapPageUrl(
    siteMap.site,
    siteMap.pageMap[uuid],
    new URLSearchParams()
  );

  return (
    <Link href={siteMapPageUrl(uuid)} {...rest}>
      {children ??
        getBlockTitle(
          siteMap.pageMap[uuid].block[uuid].value,
          siteMap.pageMap[uuid]
        )}
    </Link>
  );
};
