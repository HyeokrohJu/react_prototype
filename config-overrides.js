const path = require('path');

const resolve = dir => path.resolve(__dirname, dir);

module.exports = function override(config, env) {
  config.resolve.alias = Object.assign(config.resolve.alias, {
    '@apis': resolve('src/apis'),
    '@configs': resolve('src/configs'),
    '@pages': resolve('src/pages'),
    '@stores': resolve('src/stores'),
    '@components': resolve('src/components'),
    '@utils': resolve('src/utils'),
  });
  return config;
};
