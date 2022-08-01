// models
const { Review } = require('./../models/review')

const getAll = async (req, res) => {
  let restaurants = await Review.find({})
  res.send(restaurants)
}

const createOne = async (req, res) => {
  let created = await Review.create(req.body)
  res.json(created)
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

module.exports = {
  getAll,
  createOne,
  findOne,
  updateOne
}
