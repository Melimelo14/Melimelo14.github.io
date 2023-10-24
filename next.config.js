"use strict";

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  async redirects() {
    return [
      {
        source: "/bdd",
        destination:
          "https://airtable.com/appG8lQsyJDK5caMZ/tblNbvBoTs6r1GvQC/viw1v0UNpjhP2tzrD?blocks=bip72ZLPOmL1NPRZ8",
        basePath: false,
        permanent: false,
      },
      {
        source: "/rdv-et-infos-pratiques",
        destination: "/rendez-vous-et-infos-pratiques",
        basePath: false,
        permanent: true,
      },
      {
        source: "/qu-est-ce-que-la-mtc",
        destination: "/quest-ce-que-la-medecine-traditionnelle-chinoise",
        basePath: false,
        permanent: true,
      },
      {
        source: "/qui-suis-je",
        destination: "/a-propos",
        basePath: false,
        permanent: true,
      },
      {
        source: "/votre-soin-individualise",
        destination: "/rendez-vous-et-infos-pratiques",
        basePath: false,
        permanent: true,
      },
    ];
  },
  images: {
    unoptimized: true,
  },
  experimental: { esmExternals: true },
});
