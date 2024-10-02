module.exports = {
  // where it all starts -- the site's root Notion page
  rootNotionPageId: "7f9e6130d76940deb467f36d05b17526",

  // basic site info
  name: "Emilie Meot Médecine Traditionnelle Chinoise",
  domain: "mtc-passy-mont-blanc.com",
  author: "Emilie Meot",

  // open graph metadata (optional)
  description:
    "Médecine Traditionnelle Chinoise, 995 route du plateau d'Assy, Passy. Acupressure, Massage, Pharmacopée, Diététique. Du bébé à l'adulte, incluant un accompagnement de la femme enceinte.",

  // social usernames (optional)
  facebook: "mtc.passy.mont.blanc",
  instagram: "mtc_passy_mont_blanc",
  phone: "07.67.66.15.50",

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  pageUrlOverrides: {
    "/quest-ce-que-la-medecine-traditionnelle-chinoise":
      "4d3b9b280abb49d5b15152c38d8f2861",
    "/actualites-et-blog": "aa2cafffdfe34e938dbcf3a60915b61b",
    "/approche-energtique-holistique-ca-veut-dire-quoi":
      "a1e7b59642c34336a580b829ce114ddc",
  },

  ignoredPages: [
    "b3038c95-a555-4b2e-b944-d1d5e85953f7",
    "d13fe8eb-48b2-444e-8e80-72bfd8335bb3",
    "fd27775e-1f9e-45c6-bd57-a555a79c2e0e",
    "1549d28f-0a43-4ef2-a4ba-f1ffd57aaab1",
    "3f6e9e25-c829-446d-a5fd-2a867cc673bd",
    "432cf476-6139-4248-b54a-321b58eade12",
    "10870028-c0ea-4a8c-9739-b8ed32524738",
  ],
};
