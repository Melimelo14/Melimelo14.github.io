import { ExtendedRecordMap, PageBlock } from "notion-types";

export * from "notion-types";

export interface PageMap {
  [pageId: string]: { title: string; canonicalPath: string };
}

export interface PageError {
  message?: string;
  statusCode: number;
}

export type PageProps =
  | {
      site: Site;
      recordMap: null;
      pageId?: string;
      error: PageError;
      pageMap: PageMap;
    }
  | {
      site: Site;
      recordMap: ExtendedRecordMap;
      pageId?: string;
      error?: PageError;
      pageMap: PageMap;
    };

export interface Model {
  id: string;
  userId: string;

  createdAt: number;
  updatedAt: number;
}

export interface Site {
  name: string;
  domain: string;
  author: string;

  rootNotionPageId: string;

  // settings
  fontFamily?: string;

  // opengraph metadata
  description?: string;
  image?: string;
}

export interface SiteMap {
  site: Site;
  pageMap: PageMap;
}

export interface PageUrlOverridesMap {
  // maps from a URL path to the notion page id the page should be resolved to
  // (this overrides the built-in URL path generation for these pages)
  [pagePath: string]: string;
}

export interface PageUrlOverridesInverseMap {
  // maps from a notion page id to the URL path the page should be resolved to
  // (this overrides the built-in URL path generation for these pages)
  [pageId: string]: string;
}

export interface PreviewImage {
  url: string;
  originalWidth: number;
  originalHeight: number;
  width: number;
  height: number;
  type: string;
  dataURIBase64: string;

  error?: string;
  statusCode?: number;
}

export interface PreviewImageMap {
  [url: string]: PreviewImage;
}
