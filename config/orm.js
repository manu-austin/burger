// Import MySQL connection.
var connection = require("./connection.js");

// Method used to get and store data in db
var orm = {
    // Returns all 
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // Inserts one new entry
    insertOne: function(table, col, value, cb) {
        var queryString = "INSERT INTO " + table + '(' + col + ') VALUES ("' + value + '");'
        connection.query(queryString, value, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // Update one entry
    updateOne: function(table, condition, id, cb) {
        var queryString = "UPDATE " + table + " SET " + condition + " WHERE id = ?";
        connection.query(queryString, id, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};


// Export orm for the model
module.exports = orm;