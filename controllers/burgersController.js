const express = require('express');

const router = express.Router();

const burger = require('../models/burger.js');

router.get('/', (req, res) => {
    burger.all(data => {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject)
    })
});

router.post('/api/burgers', (req, res) => {

    burger.create(['name'], [req.body.name], data => {
        res.json({id: data.insertId})
    })
})

router.put('/api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`

    console.log('condition', condition);

    burger.update(
        {
            devoured: req.body.devoured
        },
        condition, 
        data => {
            if (data.changeRows === 0 ) return res.status(404).end();
            res.status(200).end();
        }
    )
})

router.get('*', (req, res) => {
    burger.all(data => {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject)
    })
});

module.exports = router;