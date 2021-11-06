const { multipleMongooseToObject } = require('../../util/mongoose')
const Product = require('../models/Products')
const Staff = require('../models/Staff')
const Depart = require('../models/Depart')
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
        Depart.find({})
            .then(depart => {
                res.render('add-staff', {
                    layout: 'admin',
                    departs: multipleMongooseToObject(depart)
                })
            })
    }

    // [GET] /admin/manage-products
    manageProduct(req ,res, next) {
        Product.find({})
            .then(products => {
                res.render('manage-products', {
                    layout: 'admin',
                    products: multipleMongooseToObject(products)
                })
            })
        
    }
    
    // [GET] /admin/add-products
    addDepart(req, res, next) {
        res.render('add-depart', {layout: 'admin'})
    }

    // [GET] /admin/manage-depart
    manageDepart(req, res, next) {
        Depart.find({})
            .then(depart => {
                res.render('manage-depart', {
                    layout: 'admin',
                    departs: multipleMongooseToObject(depart)
                })
            })
    }

    // [POST] /admin/store-staff
    storeStaff(req, res ,next) {
        const formData = req.body;
        const staff = new Staff(formData);
        staff.save()
            .then(() => res.redirect('/admin/manage-staff'))
            .catch(err => {
                console.log(`Insert staff data failed`);
            })
    }

    // [POST] /admin/store-depart
    storeDepart(req, res, next) {
        const formData = req.body;
        const depart = new Depart(formData);
        depart.save()
            .then(() => res.redirect('/admin/manage-depart'))
            .catch(error => {
                console.log(`Insert depart data failed`)
            })
    }

    // [POST] /admin/store-products
    storeProduct(req, res, next) {
        const formData = req.body;
        const product = new Product(formData);
        product.save()
            .then(() => res.redirect('/admin/manage-products'))
            .catch(error => {
                console.log(`Insert products data failed`)
            })
    }

    
}

module.exports = new AdminController;