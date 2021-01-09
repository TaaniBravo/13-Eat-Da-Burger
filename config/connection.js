const util = require('util');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '127.0.0.1:3306',
    port: 3306,
    user: 'root',
    password: '2b.D_?rtwbjm',
    database: 'burgers_db'
});

connection.connect(err => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
      }
    console.log ("connect as id " + connection.threadId);
});

connection.query = util.promisify(connection.query);

module.exports = connection;