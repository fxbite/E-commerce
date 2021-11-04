
class AdminController {
    
    // [GET] / 
    index(re, res, next) {
        res.render('admin', {layout: 'admin'})
    }

    // [GET] /admin/add-products
    products(req, res, next) {
        res.render('add-products', {layout: 'admin'})
    }

    // [GET] /admin/add-staff
    addStaff(req, res, next) {
        res.render('add-staff', {layout: 'admin'})
    }
}

module.exports = new AdminController;