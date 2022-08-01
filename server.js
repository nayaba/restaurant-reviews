const express = require('express')
const PORT = process.env.PORT || 3001

const app = express()

// simple testing route
app.get('/', (req, res) => {
  res.send('I`m in the get route')
})

app.listen(PORT, () => {
  console.log(`I am currently runnning at PORT: `, PORT)
})
