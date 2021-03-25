
const mysql = require('mysql2');

const database = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "MysqlEncp3627.",
    database : "testDatabase"
})

database.connect((err)=>{
    if(err){
        console.log(err);
    }
    console.log("coucou c'est cool");
})

module.exports = database;