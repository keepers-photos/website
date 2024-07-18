const { resolve } = require("path");

module.exports = {
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.html"),
        privacy: resolve(__dirname, "src/privacy.html"),
        news: resolve(__dirname, "src/whatsnew.html")
      },
    },
    outDir: "../docs",
  },
  root: "src/",
  server: {
    host: process.env.VITE_HOST || "localhost",
  },
};
