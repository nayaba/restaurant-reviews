const express = require('express')
const PORT = process.env.PORT || 3001
const db = require('./db/index')

const app = express()

// models
const { Restaurant } = require('./models/restaurant')

// MIDDLEWARE
app.use(express.static(`${__dirname}/client/build`))

// simple testing route
app.get('/restaurants', async (req, res) => {
  let restaurants = await Restaurant.find({})
  res.send(restaurants)
})

app.post('/restaurants', async (req, res) => {
  let body = req.body
  let newRestaurant = await Restaurant.create(body)
  res.send(newRestaurant)
})

// DEPLOYED APP
app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => {
  console.log(`I am currently runnning at PORT: `, PORT)
})
