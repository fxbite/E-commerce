const productsRouter = require('./products')

function route(app) {

    app.get('/', (req, res) => {
        res.render('home');
    })
    
    app.get('/products', productsRouter)

}
module.exports = route;