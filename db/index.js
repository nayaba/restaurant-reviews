const mongoose = require('mongoose')
require('dotenv').config()

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
// mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db
