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
            res.render('category', { webTitle: 'Aroma Shop - Category' });
        })
        .catch(error => next(error))
});

router.get('/:id', function (req, res) {
    res.render('single-product', { banner: 'Aroma Shop - Product Detail', webTitle: 'Aroma Shop - Product Detail' });
});

module.exports = router;