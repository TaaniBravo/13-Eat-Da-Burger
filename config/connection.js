const util = require('util');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'j21q532mu148i8ms.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: '	eu606onx24x5mgk9',
    password: 'r7ff0lvc94s4zpzl',
    database: 'wawy8pf78jfl2ws4'
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