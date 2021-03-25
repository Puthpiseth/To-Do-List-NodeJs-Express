
const model = require('../models/model');

exports.create_table = (request, response)=>{

    const req = request.body.entry_text;

    model.create_table(req,(error,status_ok)=>{
        if(error){
            throw error;
        }
        response.render("page_jerome.ejs",{request});
    })
}