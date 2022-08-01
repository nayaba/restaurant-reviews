const express = require('express')
const PORT = process.env.PORT || 3001

const app = express()

// MIDDLEWARE
app.use(express.static(`${__dirname}/client/build`))

// simple testing route
app.get('/restaurants', (req, res) => {
  res.send('restaurant route hit')
})

// DEPLOYED APP
app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => {
  console.log(`I am currently runnning at PORT: `, PORT)
})
