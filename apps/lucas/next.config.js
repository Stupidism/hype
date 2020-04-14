const path = require('path');
const Dotenv = require('dotenv-webpack');
const merge = require('webpack-merge');

module.exports = {
  webpack: (config) =>
    merge({}, config, {
      resolve: {
        // To fix react-select ssr id did not match issue:
        // https://github.com/JedWatson/react-select/issues/3590#issuecomment-517621520
        mainFields: ['main', 'browser', 'module'],
      },
      plugins: [
        new Dotenv({
          path: path.resolve(__dirname, '.env.local'),
          defaults: path.resolve(__dirname, '.env'),
        }),
      ],
    }),
};
