const { resolve } = require("path");

module.exports = {
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "assets/index.html"),
        newborn: resolve(__dirname, "assets/newborn.html"),
        privacy: resolve(__dirname, "assets/privacy.html"),
        news: resolve(__dirname, "assets/news.html"),
      },
    },
    outDir: "../docs",
  },
  root: "assets/",
  server: {
    host: process.env.VITE_HOST || "localhost",
  },
};
