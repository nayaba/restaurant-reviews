const express = require('express')
const { get } = require('mongoose')
const PORT = process.env.PORT || 3001
const routes = require('./routes')
const db = require('./db/index')

const app = express()

// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(`${__dirname}/client/build`))

app.use('/api', routes)

// DEPLOYED APP
app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => {
  console.log(`I am currently runnning at PORT: `, PORT)
})
