const express = require('express')
const router = express.Router()

const adminController = require('../app/controllers/AdminControllers')

// adminController.store
router.post('/store-depart', adminController.storeDepart)

// adminController.store
router.post('/store-products', adminController.storeProduct)

// adminController.store
router.post('/store-staff', adminController.storeStaff)

// adminController.manageDepart
router.get('/manage-depart', adminController.manageDepart)

// adminController.addDepart
router.get('/add-depart', adminController.addDepart)

// adminController.manageProduct
router.get('/manage-products', adminController.manageProduct)

// adminController.addStaff
router.get('/add-staff', adminController.addStaff)

// adminController.products
router.get('/add-products', adminController.products)

// adminController.index
router.get('/', adminController.index)

module.exports = router;