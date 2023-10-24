"use strict";

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  images: {
    unoptimized: true,
  },
  experimental: { esmExternals: true },
});
