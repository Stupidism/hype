module.exports = {
  webpack: (config) => {
    // To fix react-select ssr id did not match issue:
    // https://github.com/JedWatson/react-select/issues/3590#issuecomment-517621520
    config.resolve.mainFields = ['main', 'browser', 'module'];
    return config;
  },
};
