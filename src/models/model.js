
const database = require('../database');

exports.create_table = (table_name, callback)=>{
    database.query(
`CREATE TABLE test (id INT AUTO_INCREMENT NOT NULL,titre VARCHAR(50), description TEXT, date_de_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY(id), fini BOOLEAN DEFAULT FALSE);`,
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

        `INSERT INTO third (description) VALUES('${row_tables}');`,

        
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

        `SELECT * FROM third ;`,
        (error,response)=> {
            if(error){
                 callback(error, null);
                 return;
            }
            console.log('modeleaffiche');
            callback(null, response);

        })
        
}


exports.deleteTask = (description, callback) =>{
    database.query (
        `DELETE FROM third WHERE description= "${description}";`,
        (error,response)=> {
            if(error){
                 callback(error, null);
                 return;
            }
            console.log('modele delete');
            callback(null, response);

        })
}

exports.modifierTaskDescription = (old,new_desc,callback)=>{
    database.query(`UPDATE third SET description =${new_desc}  WHERE description = ${old};`,(err, status_ok)=>{
        if (err){
            callback(err,null);
            return;
        }
        callback(null,status_ok);
    })
}
// exports.descriptionTask = (data, callback)=>{
//     database.query(`SELECT  description FROM test WHERE titre = ${data};`, (err, status_ok)=>{
//         if(err){
//             callbackl(err,null);
//             return;
//         }
//         callback(null,status_ok);
//     })
// }

