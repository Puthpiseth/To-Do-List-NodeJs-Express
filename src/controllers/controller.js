const { response } = require('express');
const dataBaseReturn = require('../models/model');

exports.findData = (_, response) =>{
    dataBaseReturn.getData((err, data) =>{
        if(err){
            console.log(err);
         }
        
        response.render('home.ejs', {data});
        })
}
