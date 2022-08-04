module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: "7f9e6130d76940deb467f36d05b17526",

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: "Emilie Meot MTC",
  domain: "mtc-passy-mont-blanc.com",
  author: "Emilie Meot",

  // open graph metadata (optional)
  description: "Soins Traditionnels Chinois en vallée de l'Arve, sur Passy et environs",

  // social usernames (optional)
  facebook: "profile.php?id=100072381819637",
  instagram: "",
  phone: "07.67.66.15.50",

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
