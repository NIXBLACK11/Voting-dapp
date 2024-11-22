const webpack = require('webpack');
const path = require('path');

module.exports = {
  resolve: {
    fallback: Object.assign({}, {
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
    }),
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser',
    }),
  ],
};
