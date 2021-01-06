const util = require('util');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '2b.D_?rtwbjm',
    database: 'eat_da_burger_db'
});

connection.connect(err => {
    if (err) throw err;
    console.log ("connect as id " + connection.threadId);
});

connection.query = util.promisify(connection.query);

module.exports = connection;