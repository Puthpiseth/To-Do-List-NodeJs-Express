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
    const id = request.body.tasks;
    model.create_task(id, (error, datas) => {
        if(error){
            throw error;
        }
        response.redirect(`/alltask`);
      })
      
};

exports.afficheTask = (request, response)=> {
    model.affiche((error,taskData)=>{
        if(error){
            throw error;
        }
        response.render('alltask.ejs',{taskData});

    });
}

exports.delete_selected_task = (request,resp)=>{
    const id = request.params.id;
    model.deleteTask(id ,(err,response)=>{
        if(err){
            resp.send(err.message);
        }
        resp.redirect('/alltask');
    })
}




