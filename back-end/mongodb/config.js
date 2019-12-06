const logger = require('../config/logger');
const mongoose = require('mongoose');

const options = { useNewUrlParser: true }

module.exports = (config) => {
  mongoose.connect(config.mongoURL, options).then(() => {
    logger.info('Connected to MongoDB');
  }).catch((err) => {
    logger.error(err);
  });
};
