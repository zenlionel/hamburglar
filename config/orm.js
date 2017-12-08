var connection = require('./connection.js')


function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        arr.push(key + "=" + value);
    }
    return arr.toString(); 
}


var orm = {
    all: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput;
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err
            }
            cb(result);
        });
    },
    create: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
        console.log(vals);
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += vals;
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    update: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;