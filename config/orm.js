const connection = require('./connection.js');

const printQuestionMarks = num => {
    const arr = [];

    for (let i = 0; i < num.length; i++) {
        arr.push('?')   
    }
    return arr.toString();
}

const objToSql = ob => {
    const arr= [];

    for (let key in ob) {
        let value = ob[key];

        if(Object.hasOwnProperty.call(ob, key)) {
            if(typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = `'${value}'`
            }
            arr.push(`${key}=${value}`)
        }
    }

    return arr.toString();
}

const orm = {

    all: (table, cb) => {
        const queryStr = `SELECT * FROM ${table};`
        connection.query(queryStr, (err, data ) => {
            if (err) throw err;
            cb(data);
        })
    },

    create: (table, cols, vals, cb) => {
        const queryStr = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals)})`
        
        connection.query(queryStr, vals, (err, data) => {
            if (err) throw err;
            cb(data);
        })
    },

    update: (table, objColVals, condition, cb) => {
        const queryStr = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`

        connection.query(queryStr, (err, data) => {
            if (err) throw err;
            cb(data);
        })
    }
}

module.exports = orm;