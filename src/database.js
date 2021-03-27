
const mysql = require('mysql2');

const database = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "simplon2021",
    database : "to_do_list"
})

database.connect((err)=>{
    if(err){
        console.log(err);
    }
})

module.exports = database;