const orm = require('../config/orm.js');

const burger = {
    all: cb => {
        orm.all('burgers', data => {
            cb(data);
        })
    },

    create: (cols, vals, cb) => {
        orm.create('burgers', cols, vals, data => {
            cb(data);
        })
    },

    update: (objColVals, condition, cb) => {
        orm.update('burgers', objColVals, condition, data => {
            cb(data);
        })
    }
}

module.exports = burger;