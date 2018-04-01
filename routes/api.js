var express = require('express');
var router = express.Router();

var models = require('../models');

router.get('/get-all-op', function(req, res, next) {
    console.log('aa');
});

module.exports = router;
