"use strict";

module.exports = {
  output: "export",
  staticPageGenerationTimeout: 300,
  images: {
    unoptimized: true,
  },
  experimental: {
    esmExternals: true,
    cpus: 1,
    workerThreads: false,
  },
};
