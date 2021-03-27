const { response } = require("express");

const model = require('../models/model');

exports.create_table = (request, response)=>{

    const req = request.body.entry_text;

    model.create_table(req,(error, status_ok)=>{
        if(error){
            throw error;
        }
        response.redirect("/alltask");
    })
}


exports.addTask = (request, response) =>{
    
    const id = request.originalUrl.split("=");
    model.create_task(id[1], (error, datas) => {
        if(error){
            throw error;

        }
        console.log(id[1]);
        response.redirect("/alltask/:id")

       
      })
      
};

exports.afficheTasks = (request, response, next) => {
    model.affiche((error,taskData)=>{
        if(error){
            throw error;
        }
        response.render('alltask.ejs',{taskData});
        next();

    });
    
}


// exports.deleteTask = (request, response)=> {

//     model.delete((error,taskData)=>{
//         if(error){
//             throw error;
//         }
//         response.redirect('/alltask');

//     });
    
// }
