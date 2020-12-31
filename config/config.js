// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
    port: process.env.PORT || 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
});

// Makes connection
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Exports connection for our ORM to use.
module.exports = connection;