import * as React from "react";
import Link from "next/link";
import { parsePageId, getBlockTitle } from "notion-utils";
import { mapPageUrl } from "../lib/map-page-url";
import * as types from "../lib/types";

export const PageLink: React.FC<
  { siteMap: types.SiteMap; pageId: string } & React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
> = (props) => {
  const { siteMap, pageId, ...rest } = props;
  const uuid = parsePageId(pageId);
  const siteMapPageUrl = mapPageUrl(
    siteMap.site,
    siteMap.pageMap[uuid],
    new URLSearchParams()
  );

  return (
    <Link href={siteMapPageUrl(uuid)}>
      <a {...rest}>
        {getBlockTitle(
          siteMap.pageMap[uuid].block[uuid].value,
          siteMap.pageMap[uuid]
        )}
      </a>
    </Link>
  );
};
