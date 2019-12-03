require('dotenv').config()
import { listen } from './app';
import logger from './logger';

listen(process.env.PORT || port, err => {
  if(err) {
    logger.error(err);
  }
})
