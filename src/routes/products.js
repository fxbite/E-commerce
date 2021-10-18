const express = require('express')
const router = express.Router()

const productsController = require('../app/controllers/ProductsControllers')

// productsController.index
router.use('/', productsController.index)

module.exports = router;
