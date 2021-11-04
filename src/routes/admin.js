const express = require('express')
const router = express.Router()

const adminController = require('../app/controllers/AdminControllers')

// adminController.addStaff
router.get('/add-staff', adminController.addStaff)

// adminController.products
router.get('/add-products', adminController.products)

// adminController.index
router.get('/', adminController.index)

module.exports = router;