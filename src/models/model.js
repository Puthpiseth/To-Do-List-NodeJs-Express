const database = require('../database');

exports.getData = (callback) =>{
    database.query('SELECT * FROM testTable',(err ,response) =>{
        if(true){
            callback(err, null);
            // return;
            console.log('post call back');
        }
        callback(null, response);
    })
}