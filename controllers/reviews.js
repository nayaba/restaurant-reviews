// models
const { Review } = require('./../models/review')
const { Restaurant } = require('./../models/restaurant')

const getAll = async (req, res) => {
  let restaurants = await Review.find({})
  res.send(restaurants)
}

const createOne = async (req, res) => {
  let found = await Restaurant.findById(req.params.id)
  // let created = await Review.create(req.body)

  res.json(found)
}

const findOne = async (req, res) => {
  let found = await Review.findById(req.params.id)
  res.json(found)
}

const updateOne = async (req, res) => {
  let updated = await Review.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  )
  res.json(updated)
}

const deleteOne = async (req, res) => {
  let deleted = await Review.deleteOne({ _id: req.params.id })
  res.json(deleted)
}

module.exports = {
  getAll,
  createOne,
  findOne,
  updateOne,
  deleteOne
}
