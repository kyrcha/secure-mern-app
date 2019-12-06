const bunyan = require('bunyan')
const config = require('./envs');

const logger = bunyan.createLogger({
  name: "back-end",
  src: config.bunyan_src
});

module.exports = logger
