const path = require('path');
module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@css': path.resolve(__dirname, 'src/css'),
      '@images': path.resolve(__dirname, 'src/images')
    },
  };
return config;
};