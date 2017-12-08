var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function (req, res) {
    console.log()
    res.redirect('/burger')
    
});

router.get('/burger', function (req, res) {
    burger.all(function (result) {
        var hbsObj = {
            burger: result
        }
        console.log(hbsObj)
        res.render('index', hbsObj);
    });
});

router.post('/burger/create', function (req, res) {
    burger.create([
        'burger_name', 'devoured'
    ], [
        req.body.burger_name, req.body.devoured
    ], function (result) {
        res.redirect('/burger');
    });
});

router.put('/burger/update/:id', function (req, res) {
    var condition = 'id = ' + req.params.id;
    console.log('condition', condition);

    burger.update({
        'devoured': req.body.devoured
    }, condition, function (result) {
        res.redirect('/burger');
    });
});
module.exports = router;