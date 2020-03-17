let controller = {};

let models = require('../models');

let Product = models.Product;

controller.getTrendingProduct = function () {
    return new Promise(function (resolve, reject) {
        Product
            .findAll({
                order: [
                    ['overallReview', 'DESC']
                ],
                limit: 8,
                include: [{ model: models.Category }],
                attributes: ['id', 'name', 'imagepath', 'summary']
            })
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
};

module.exports = controller;