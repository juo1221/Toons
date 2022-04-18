// webpack.config.js
module.exports = {
  resolve: {
    extensions: ['ts', 'tsx', 'js', 'jsx'],
    alias: {
      context: path.resolve(__dirname, 'src/context'),
      util: path.resolve(__dirname, 'src/utils'),
    },
  },
};
