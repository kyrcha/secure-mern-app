const express = require('express')
const path = require('path')
const app = express()

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../front-end/build/')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../front-end/build/index.html'))
  })
} else {
  app.get('/', (req, res) => res.send('Hello World!'))
}

module.exports = app
