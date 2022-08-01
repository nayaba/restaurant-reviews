// models
const { Restaurant } = require('./../models/restaurant')

const getAll = async (req, res) => {
  let restaurants = await Restaurant.find({})
  res.send(restaurants)
}

module.exports = {
  getAll
}
