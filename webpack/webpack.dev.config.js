const baseConfig = require('./base.config');

const devConfig = Object.assign({}, baseConfig, {
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './lib/public/index.js'
  ]
});

module.exports = devConfig;
