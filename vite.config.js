const { resolve } = require("path");

module.exports = {
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.html"),
        privacy: resolve(__dirname, "src/privacy.html"),
        news: resolve(__dirname, "src/whatsnew.html"),
        manifest: resolve(__dirname, "src/manifest.json"),
        "service-worker": resolve(__dirname, "src/service-worker.js"),
      },
    },
    outDir: "../docs",
  },
  root: "src/",
  server: {
    host: process.env.VITE_HOST || "localhost",
  },
};
