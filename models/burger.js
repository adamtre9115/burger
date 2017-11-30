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
    insertOne: function () {
        orm.insertOne("table", "burgerName", function (results) {
            console.log(results);
        })
    },
    // update already inserted burger
    updateOne: function () {
        orm.updateOne("newBurger", "oldBurger", function (results) {
            console.log(results);
        })
    }
}

// burgerFunc.selectAll();
// insert function does not properly work
burgerFunc.insertOne("burgers", "McDouble");

/*
// Find a pet in the pets table by an animal_name of Rachel.
orm.selectWhere("pets", "animal_name", "Rachel");

// Find the buyer with the most pets.
orm.findWhoHasMost("buyer_name", "buyer_id", "buyers", "pets");
// */