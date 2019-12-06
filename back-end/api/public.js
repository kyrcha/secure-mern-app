const express = require('express');
const logger = require('../config/logger')
const config = require('../config/envs')
const jwt = require('jsonwebtoken');
const User = require('../mongodb/models/user');

const router = express.Router();

router.post('/login', (req, res) => {
  // find user by email
  // has and check password
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      const jwtToken = jwt.sign({
        id: user.id,
        email: user.email,
      }, config.JWT_SECRET, {
        expiresIn: 24 * 60 * 60,
      });
      logger.info('User logged in');
      logger.info(jwtToken);
      res.json({jet: jwtToken});
    } else {
      res.status(401).json({message: "not valid"})
    }
  }).catch((dbErr) => {
    logger.error(dbErr);
    res.status(401).json({message: "not valid"})
  })
});

router.post('/signup', (req, res) => {
  logger.info(req.body)
  res.status(201).json({email: req.body.email})
});

module.exports = router;
