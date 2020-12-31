const orm = require("../config/orm.js");

// create the code that will call the ORM functions using burger specific input for the ORM.

const burger = {
    // Show all in db
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    // Create new burger in db
    create: function(value, col, value, cb) {
        orm.insertOne("burgers", col, value, function(res) {
            cb(res);
        });
    },
    // Change the status of the burger
    update: function(condition, id, cb) {
        orm.updateOne("burgers", condition, id, function(res) {
            cb(res);
        });
    }
};



// Export at the end of the burger.js file.

module.exports = burger;