const Dotenv = require('dotenv-webpack');

module.exports = function override(config, env) {
  // Add Dotenv plugin to webpack
  config.plugins.push(
    new Dotenv({
      path: './.env',
      safe: true,
    })
  );

  return config;
};