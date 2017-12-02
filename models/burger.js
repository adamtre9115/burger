var orm = require("../config/orm.js");

// console.log(orm);

var burgerFunc = {
    // Find all burgers
    selectAll: function () {
        orm.selectAll("burgers", function (results) {
            console.log(results);
        });
    },
    // insert new burger
    insertOne: function (cols, vals, cb) {
        orm.insertOne("burgerName", cols, vals, function (results) {
            console.log(results);
        })
    },
    // update already inserted burger
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burger", objColVals, condition, function (results) {
            console.log(results);
        })
    }
}


module.exports = burgerFunc;