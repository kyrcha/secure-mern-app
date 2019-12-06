const config = require('./config/envs');
const app = require('./config/app')(config);
const logger = require('./config/logger');
const os = require('os');
const mongoConfig = require('./mongodb/config');

app.listen(config.port, err => {
  if(err) {
    logger.error(err);
  } else {
    logger.info('Express server is listening at %s:%s, in %s mode', os.hostname(), config.port, config.env);
    mongoConfig(config);
  }
});
