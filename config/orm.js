var connect = require("./connection.js");

// console.log(connect);

// select all

function selectAll() {
    connect.query(
        "SELECT * FROM burgers",
        function (err, res) {
            if (err) {
                console.log(err);
            } else {
                console.log(res);
            }
        }
    )
}

// insert one burger