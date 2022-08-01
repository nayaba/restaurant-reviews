const { Router } = require('express')
const router = Router()
const { getAll, createOne, findOne } = require('./../controllers/restaurants')

router.get('/restaurants', getAll)

router.post('/restaurants', createOne)

router.get('/restaurants/:id', findOne)

module.exports = router
