let express = require('express');
let router = express.Router();

router.get('/', function (req, res) {
    res.render('category', { webTitle: 'Aroma Shop - Category' });
});

router.get('/:id', function (req, res) {
    res.render('single-product', { banner: 'Aroma Shop - Product Detail', webTitle: 'Aroma Shop - Product Detail' });
});

module.exports = router;