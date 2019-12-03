const bunyan = require('bunyan')
const logger = bunyan.createLogger({name: "back-end"});

module.exports = logger
