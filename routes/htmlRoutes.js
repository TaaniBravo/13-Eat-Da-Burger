const path = require("path");
const orm = require("../config/orm.js");

module.exports = app => {
    app.engine

    app.get('/', (req, res) => {
        res.render('index');
    })
}