const path = require("path");
const db = require("../db/orm.js");

module.exports = app => {
    app.engine

    app.get('/', (req, res) => {
        res.render('index');
    })
}