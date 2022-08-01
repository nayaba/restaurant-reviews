const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Restaurant = new Schema(
  {
    name: String,
    location: String,
    photo_url: String
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Restaurant', Restaurant)
