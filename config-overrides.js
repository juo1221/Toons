const FontPreloadPlugin = require('webpack-font-preload-plugin');
const { alias, configPaths } = require('react-app-rewire-alias');

module.exports = function override(config) {
  config.plugins.push(new FontPreloadPlugin({ extensions: ['woff2'] }));
  return alias(configPaths('./tsconfig.paths.json'))(config);
};
