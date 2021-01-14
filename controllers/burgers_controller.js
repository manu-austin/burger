// Imports Express
var express = require("express");

// Calls an Instance of the express.Router(), applies Routes to it, and then tells the Application to use those Routes
var router = express.Router();

// Imports burger.js
var burger = require("../models/burger.js");

// Creates routes

// Get route to get all burgers from table
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObj = {
            burgers: data
        };
        res.render("index", hbsObj);
    });
});

// Post route to create new burger
router.post("/api/burgers", function(req, res) {
    burger.insertOne(req.body.name, function(result) {
        res.json({ id: result.insertId }); // Gives info back of the ID of the burger
    });
});


// Put route updates burger to devoured
router.put("/api/burgers/:id", function(req, res) {
    burger.updateOne(condition, req.params.id, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
});



// Exports the routes for server.js to use
module.exports = router;