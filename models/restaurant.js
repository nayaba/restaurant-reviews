const mongoose = require('mongoose')
const Schema = mongoose.Schema

const restaurantSchema = new Schema(
  {
    name: { type: String },
    location: { type: String },
    photo_url: { type: String }
  },
  {
    timestamps: true
  }
)
const Restaurant = mongoose.model('Restaurant', restaurantSchema)
module.exports = {
  Restaurant
}
