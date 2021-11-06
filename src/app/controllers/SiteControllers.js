const Product = require('../models/Products')
const Cart = require('../models/Cart')
const Staff = require('../models/Staff')
const { multipleMongooseToObject } = require('../../util/mongoose')

class SiteController {
    
    // [GET] /
    index(req, res, next) {
        Product.find({})
        .then(products => {
            products = products.map(product => product.toObject());
            res.render('home', { products });
        })

        .catch(next);

    }

    // [GET] /add-to-cart/:id
    cart(req, res, next) {
        var productId = req.params.id;
        var cart = new Cart(req.session.cart ? req.session.cart : {});

        Product.findById(productId, function(err, product) {
            if (err) {
                return res.redirect('/');
            }
            cart.add(product, product.id);
            req.session.cart = cart;
            console.log(req.session.cart);
            res.redirect('/');
        })
    }

    // [GET] /shopping-cart
    shopping(req, res, next) {
        if (!req.session.cart) {
            return res.render('shopping-cart', {products: null, layout: false});
        }
        var cart = new Cart(req.session.cart);
        res.render('shopping-cart', {products: cart.generateArray(), totalPrice: cart.totalPrice, layout: false});
    }

    // [GET] /admin/staff
    staff(req,res,next) {
        Staff.find({})
        .then(staff => {
            staff = staff.map(staffs => staffs.toObject());
            res.render('staff', { layout: 'admin', staff });
        })

        .catch(next);

        
    }

   
}

module.exports = new SiteController;