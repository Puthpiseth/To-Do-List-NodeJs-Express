
const database = require('../database');

exports.create_table = (table_name, callback)=>{
    database.query(
`CREATE TABLE ${table_name}(id INT AUTO_INCREMENT NOT NULL, description TEXT, date_de_creation DATETIME, PRIMARY KEY(id));`,(err, response)=>{
                    if(err){
                        callback(err,null);
                        return;
                    }
                    callback(null,response);
                })
} 