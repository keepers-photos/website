const { resolve } = require('path');

module.exports = {
  root: '.',
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        privacy: resolve(__dirname, 'privacy.html'),
      }
    },
    outDir: './docs'
  }
}
