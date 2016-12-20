var express = require('express');
var router = express.Router();
var readServices = require('../controllers/read_services_controller')

var routes = ['/', '/service-directory'],
    routePattern = routes.reduce(function(pattern, route, index, array) {
        if (index == 0) {
            pattern += '^((' + route + ')|';
        } else if (index == array.length -1) {
            pattern += '(' + route + '))$';
        } else {
            pattern += '(' + route + ')|';
        }
        return pattern;
    }, ''),
    pages = new RegExp(routePattern);

router.get(pages, function(req, res, next) {
    res.render('layout');
});

router.get('/ajax/home/', (req, res) => {
    res.render('home');
});
router.get('/ajax/service-directory/', (req, res) => {
    res.render('service-directory');
});
router.get('/ajax/get-services', readServices);

module.exports = router;
