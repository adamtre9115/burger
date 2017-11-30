var connection = require("./connection.js");

// console.log(connect);

var orm = {
    // select all
    selectAll: function (tableInput, callback) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
            }
        });
    },
    // insert new row
    insertOne: function (newBurger, callback) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES ??";
        console.log(queryString);
        connection.query(queryString, [newBurger], function (err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
            }
        });
    },
    // update row
    updateOne: function (newBurger, oldBurger, callback) {
        var queryString = "UPDATE burgers SET burger_name = ?? where burger_name = ??";
        connection.query(queryString, [newBurger, oldBurger], function (err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
            }
        })
    }
}

// export for further use
module.exports = orm;