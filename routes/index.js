const { Router } = require('express')
const router = Router()
const restaurant = require('./../controllers/restaurants')
const review = require('./../controllers/reviews')

// restaurant routes
router.get('/restaurants', restaurant.getAll)
router.post('/restaurants', restaurant.createOne)
router.get('/restaurants/:id', restaurant.findOne)

// review routes
router.get('/reviews', review.getAll)
router.post('/reviews', review.createOne)
router.get('/reviews/:id', review.findOne)
router.put('/reviews/:id', review.updateOne)

module.exports = router
