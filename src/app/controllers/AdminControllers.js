const { multipleMongooseToObject } = require('../../util/mongoose')
const Product = require('../models/Products')
class AdminController {
    
    // [GET] / 
    index(re, res, next) {
        res.render('dashboard', {layout: 'admin'})
    }

    // [GET] /admin/add-products
    products(req, res, next) {
        res.render('add-products', {layout: 'admin'})
    }

    // [GET] /admin/add-staff
    addStaff(req, res, next) {
        res.render('add-staff', {layout: 'admin'})
    }

    manageProduct(req ,res, next) {
        Product.find({})
            .then(products => {
                res.render('manage-products', {
                    layout: 'admin',
                    products: multipleMongooseToObject(products)
                })
            })
        
    }

    addDepart(req, res, next) {
        res.render('add-depart', {layout: 'admin'})
    }

    manageDepart(req, res, next) {
        Depart.find({})
            .then(depart => {
                res.render('manage-depart', {
                    layout: 'admin',
                    depart: multipleMongooseToObject(depart)
                })
            })
    }
}

module.exports = new AdminController;