module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: "7f9e6130d76940deb467f36d05b17526",

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: "Transitive Bullshit",
  domain: "transitivebullsh.it",
  author: "Travis Fischer",

  // open graph metadata (optional)
  description: "Example site description",

  // social usernames (optional)
  twitter: "transitive_bs",
  linkedin: "fisch2",

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,
};
