const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "testTable"
});

db.connect((error) =>{
    if (error) {
        console.log("Connection to database works!")
    }
});

module.exports = db;