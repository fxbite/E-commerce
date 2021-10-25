const Product = require('../models/Products')

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

    // [GET] /
}

module.exports = new SiteController;