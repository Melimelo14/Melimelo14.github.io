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
    ];
  },
  images: {
    unoptimized: true,
  },
  experimental: { esmExternals: true },
});
