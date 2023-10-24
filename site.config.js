module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: "7f9e6130d76940deb467f36d05b17526",

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: "Emilie Meot Médecine Traditionnelle Chinoise",
  domain: "mtc-passy-mont-blanc.com",
  author: "Emilie Meot",

  // open graph metadata (optional)
  description:
    "Soins Traditionnels Chinois, 995 route du plateau d'Assy, Passy. Acupressure, Massage, Pharmacopée, Diététique. Du bébé à l'adulte, incluant un accompagnement de la femme enceinte.",

  // social usernames (optional)
  facebook: "emilie.meot.mtc.passy",
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
  pageUrlOverrides: {
    "/la-medecine-traditionnelle-chinoise": "4d3b9b280abb49d5b15152c38d8f2861",
  },
};
