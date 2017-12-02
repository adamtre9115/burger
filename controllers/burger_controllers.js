var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

/**************
 routes
**************/

router.get("/", (req, res) => {
    res.redirect('/burgers');
});


router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// insert new burger
router.post("/", function (req, res) {
    burger.insertOne([
        "name"
    ], [
        req.body.name
    ], function (result) {
        // Send back the ID of the new quote
        res.json({
            id: result.insertId
        });
    });
});

// update a burger
router.put("/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.sleepy
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;