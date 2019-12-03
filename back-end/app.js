const express = require('express')
const app = express()

if(process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../front-end/build/index.html'))
  })
} else {
  app.get('/', (req, res) => res.send('Hello World!'))
}

module.exports = app
