const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema(
  {
    name: { type: String },
    title: { type: String },
    body: { type: String },
    rating: { type: Number },
    restaurant: { type: Schema.Types.ObjectId, ref: 'Restaurant' }
  },
  {
    timestamps: true
  }
)
const Review = mongoose.model('Review', reviewSchema)
module.exports = {
  Review
}
