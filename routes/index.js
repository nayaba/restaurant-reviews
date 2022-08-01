const { Router } = require('express')
const router = Router()
const { getAll, createOne, findOne } = require('./../controllers/restaurants')

// restaurant routes
router.get('/restaurants', getAll)
router.post('/restaurants', createOne)
router.get('/restaurants/:id', findOne)

// review routes
router.get('/reviews', (req, res) => {
  res.send('this route works!')
})

module.exports = router
