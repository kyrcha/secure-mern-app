require('dotenv').config()
const app = require('./app')
const logger = require('./logger')

app.listen(process.env.PORT || port, err => {
  if(err) {
    logger.error(err);
  }
})
