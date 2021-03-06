let express = require('express');
let router = express.Router();

router.get('/', function (req, res, next) {
    let categoryController = require('../controllers/categoryController');
    categoryController
        .getAll()
        .then(data => {
            res.locals.categories = data;
            let brandController = require('../controllers/brandController');
            return brandController.getAll();
        }).then(data => {
            res.locals.brands = data;
            let colorController = require('../controllers/colorController');
            return colorController.getAll();
        }).then(data => {
            res.locals.colors = data;
            let productController = require('../controllers/productController');
            return productController.getAll();
        }).then(data => {
            res.locals.products = data;
            res.render('category', { banner: 'Product Category', webTitle: 'Aroma Shop - Products' });
        })
        .catch(error => next(error))
});

router.get('/:id', function (req, res, next) {
    let productController = require('../controllers/productController');
    productController
        .getById(req.params.id)
        .then(product => {
            res.locals.product = product;
            res.render('single-product', { banner: 'Product Detail', webTitle: 'Aroma Shop - Product Detail' });
        })
        .catch(error => next(error));

});

module.exports = router;