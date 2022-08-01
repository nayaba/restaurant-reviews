const express = require('express')
const { get } = require('mongoose')
const PORT = process.env.PORT || 3001
const db = require('./db/index')

const app = express()

// models
const { Restaurant } = require('./models/restaurant')

// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(`${__dirname}/client/build`))

// simple testing route
app.get('/restaurants', async (req, res) => {
  let restaurants = await Restaurant.find({})
  res.send(restaurants)
})

app.post('/restaurants', async (req, res) => {
  let created = await Restaurant.create(req.body)
  res.json(created)
})

app.get('restaurants/:id', async (req, res) => {
  let found = await Restaurant.findById(req.params.id)
  res.json(found)
})

// DEPLOYED APP
app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => {
  console.log(`I am currently runnning at PORT: `, PORT)
})
