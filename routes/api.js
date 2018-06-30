var express = require('express');
var router = express.Router();

var models = require('../models');
var queries = require('../queries/queries');

var sequelize = models.sequelize;


router.get('/get-all-op', function(req, res, next) {
    queries.getAllOPnews()
        .then(news => {
            console.log(1, news);
            res.send(news);
        })
        .catch(err => {
            res.status(400).send('err');
        });
});

router.get('/get-all-ss', function(req, res, next) {
    queries.getAllSSnews()
        .then(ss => {
            res.send(ss);
        })
        .catch(err => {
            res.status(400).send('err');
        });
});

router.get('/get-current-news/:id/:slug', function(req, res, next) {
    let { id, slug } = req.params;

    queries.getCurrentNews(id, slug)
        .then(news => {
            console.log(1, news);
            let obj = {
                id: news[0].id,
                naziv: news[0].naziv,
                tekst: news[0].tekst,
                naslov: news[0].naslov,
                createdAt: news[0].createdAt,
                admin: news[0].ime,
                slika: news[0].slika,
                kat_id: news[0].kategorija_id,
            };
            res.send(obj);
        })
        .catch(err => {
            res.status(400).send('err');
    });

});

router.get('/get-all-highlights', function(req, res, next) {
    models.Vijesti.findAll({ where: { istaknuto: true }, order: [['createdAt', 'DESC']] })
        .then( istaknuto => {
            console.log(1, istaknuto);
            res.send(istaknuto);
        })
        .catch(err =>
            res.status(400).send({err: 'Bad request!'}));
});

router.get('/get-all', function(req, res, next) {
    models.Vijesti.findAll({
        attributes: [[sequelize.fn('COUNT', sequelize.col('id')), 'number']], where: {kategorija_id: 2}
    })
        .then( n => {
            models.Vijesti.findAll({
                where: { kategorija_id: 2 }, order: [['createdAt', 'DESC']], offset: 1, limit: 1
            })
                .then( v => {
                    console.log(1, v);
                    res.send({v, n});
                })
                .catch(err =>
                    res.status(400).send({err: 'Bad request!'}));
        })
        .catch(err =>
            res.status(400).send({err: 'Bad request!'}));

});


module.exports = router;
