let controller = {};

let models = require('../models');

let Brand = models.Brand;

controller.getAll = function () {
    return new Promise(function (resolve, reject) {
        Brand
            .findAll({
                attributes: ['id', 'name', 'imagepath'],
                include: [{ model: models.Product }]
            })
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
};

module.exports = controller;