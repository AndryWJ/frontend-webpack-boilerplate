const path = require('path');

var paths = {
  /* Path to source files directory */
  source: path.resolve(__dirname, '../src/'),
  /* Path to built files directory */
  output: path.resolve(__dirname, '../dist/'),
}

module.exports = {
  entry: {
    app: path.resolve(paths.source, 'templates/index', 'index.js'),
    aboutus: path.resolve(paths.source, 'templates/aboutus', 'aboutus.js'),
  },
  paths: paths,
  server: {
    host: 'localhost',
    port: 8000,
  },
  limits: {
    /* Image files size in bytes. Below this value the image file will be served as DataURL (inline base64). */
    images: 8192,

    /* Font files size in bytes. Below this value the font file will be served as DataURL (inline base64). */
    fonts: 8192,
  },
};
