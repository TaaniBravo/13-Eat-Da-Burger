const connection = require('./connection');

module.exports = {

    selectAll() {
        return connection.query('SELECT * FROM burgers')
    },

    insertOne(burger) {
        return connection.query('INSERT INTO burgers VALUES (?)', [{
            name: burger.name
        }])
    },

    updateOne(burger) {
        return connection.query('UPDATE burgers SET ? WHERE ?', [
            {name: burger.name},
            {devoured: burger.devoured}
        ])
    }
}