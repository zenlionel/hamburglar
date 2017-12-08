var mysql = require('mysql');

var connection = mysql.createConnection({
    port: 3306,
    user: 'root',
    password: '3Nkerman',
    database: 'burgers_db'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;