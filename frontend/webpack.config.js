// webpack.config.js

const webpack = require('webpack');

module.exports = {
  resolve: {
    fallback: {
      "fs": false, // or require.resolve("path-browserify")
      "path": require.resolve("path-browserify"),
      "os": require.resolve("os-browserify/browser")
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        // Define your environment variables here
        TOMORROW_API_KEY: JSON.stringify(process.env.TOMORROW_API_KEY),
        GOOGLE_API_KEY: JSON.stringify(process.env.GOOGLE_API_KEY)
      }
    })
  ]
};
