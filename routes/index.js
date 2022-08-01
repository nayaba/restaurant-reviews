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

module.exports = router
