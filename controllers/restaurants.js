// models
const { Restaurant } = require('./../models/restaurant')

const getAll = async (req, res) => {
  let restaurants = await Restaurant.find({})
  res.send(restaurants)
}

const createOne = async (req, res) => {
  let created = await Restaurant.create(req.body)
  res.json(created)
}

const findOne = async (req, res) => {
  let found = await Restaurant.findById(req.params.id)
  res.json(found)
}

module.exports = {
  getAll,
  createOne,
  findOne
}
