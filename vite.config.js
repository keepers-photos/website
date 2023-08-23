const { resolve } = require('path');

module.exports = {
  root: 'src/',
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.html'),
        privacy: resolve(__dirname, 'src/privacy.html'),
        widget_creation: resolve(__dirname, 'src/help/widget_creation.html'),
      },
    },
    outDir: '../docs'
  }
}
