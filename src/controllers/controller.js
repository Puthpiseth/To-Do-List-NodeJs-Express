const response = require("express");
const Model = require("../models/model");

exports.findAll = (request, response) => {
    Model.getAll((error, to_do_list) =>{
        if (error) {
            response.send(error.message);
        }

        response.render("./src/views/view.ejs", {to_do_list});
    });
}

