
const database = require('../database');

exports.create_table = (table_name, callback)=>{
    database.query(
`CREATE TABLE ${table_name}(id INT AUTO_INCREMENT NOT NULL, description TEXT, date_de_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY(id), fini BOOLEAN DEFAULT FALSE);`,
(err, response)=>{
                    if(err){
                        callback(err,null);
                        return;
                    }
                    console.log('new table');
                    callback(null,response);
                })
} 

exports.create_task = (row_tables, callback) => {
    database.query (
        `INSERT INTO expressJS  (description) VALUES('${row_tables}');`,
        
       (error,response)=>{
           if(error){
                callback(err, null);
                return;
           }
           console.log('modeleinsertinto');
           callback(null, response);
       })
}


exports.affiche = (callback) =>{
    database.query (
        `SELECT * FROM expressJS ;`,
        (error,response)=> {
            if(error){
                 callback(error, null);
                 return;
            }
            console.log('modeleaffiche');
            callback(null, response);

        })
        
        
}

