const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const cors = require('cors')
const morgan = require('morgan');
const sslRedirect = require('heroku-ssl-redirect');
const logger = require('./logger')

function baseSetup(app, config) {
  app.set('secret', config.secrets.jwt);
  if (config.env === 'development') {
    app.use(morgan('short'));
    app.use(cors())
  }
  app.use(sslRedirect(['production']));
  app.use(bodyParser.json());
  app.use(express.static(path.join(__dirname, '../../../front-end/build/')));
  if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../front-end/build/')))
  } else {
    app.get('/', (req, res) => res.send('Hello World!'))
  }
}

module.exports = function (config) {
  const app = express();

  baseSetup(app, config);

  require('../api')(app);

  if(process.env.NODE_ENV === 'production') {
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../front-end/build/index.html'))
    })
  }

  app.use(function (err, req, res, next) { // need to have next https://github.com/visionmedia/supertest/issues/416#issuecomment-514508137
    logger.error(err)
    res.status(500).json({ message: 'Something broke!' })
  });

  return app;
};
