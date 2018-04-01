var express = require('express');
var router = express.Router();

var models = require('../models');

router.get('/get-all-op', function(req, res, next) {
    models.Op.findAll({ where: {
            istaknuto: false
        }})
        .then( op => {
            res.send(op);
        }).catch(err =>
            res.status(400).send({err: 'Bad request!'}));
});

router.get('/get-current-news/:id', function(req, res, next) {
    let { id } = req.params;
    models.Op.findOne({ where: {
            id: id
        }})
        .then( news => {
            res.send(news);
        }).catch(err =>
        res.status(400).send({err: 'Bad request!'}));
});

module.exports = router;
