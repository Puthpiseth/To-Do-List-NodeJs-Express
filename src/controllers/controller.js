const { response } = require("express");

const model = require('../models/model');

exports.create_table = (request, response)=>{

    const req = request.body.entry_text;

    model.create_table(req,(error,status_ok)=>{
        if(error){
            throw error;
        }
       console.log(req);
        response.render("alltask.ejs");
    })
}

exports.addTask = (request, response) =>{
    const description = request.body.tasks;
    model.create_task(description, (error,datas) => {
        if(error){
            throw error;
        }
       response.redirect("/alltask");
         
       
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


/* exports.tasksList = (request, response, next) => {
    model.allTaskList((error,blood)=>{
        if(error){
            throw error;
        }
        console.log('new task added');
        next();
        

    });
    
} */