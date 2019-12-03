import express from 'express'
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

if(process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../front-end/build/index.html'))
  })
}

export default app
