require('dotenv').config()
const _ = require('lodash');

function throwErr(msg) {
  throw new Error(msg);
}

const all = {
  env: process.env.NODE_ENV || throwErr('NODE_ENV is unset'),
  port: process.env.PORT || throwErr('PORT is unset'),
  mongoURL: process.env.MONGODB_URL || throwErr('MONGODB_URI is unset'),
  mailgunKey: process.env.MAILGUN || throwErr('MAILGUN is unset'),
  secrets: {
    jwt: process.env.JWT_SECRET || throwErr('JWT_SECRET is unset'),
  }
};

module.exports = _.merge(all, require(`./${all.env}.js`) || {});
