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

module.exports = router;
