const mongoose = require('mongoose')
const Schema = mongoose.Schema

const restaurantSchema = new Schema(
  {
    name: String,
    location: String,
    photo_url: String
  },
  {
    timestamps: true
  }
)
const Restaurant = mongoose.model('Restaurant', restaurantSchema)
module.exports = {
  Restaurant
}
