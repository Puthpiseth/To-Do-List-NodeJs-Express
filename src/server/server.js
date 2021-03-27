const express = require('express');
const ejs = require('ejs');
const bodyParser = require("body-parser");

const server = express();
server.engine('ejs', ejs.renderFile);

// set up template engine
server.set('views', './src/views');

// static files
server.use(express.static("./src/style_sheets/"));
server.use(express.static('./src/assets'));
server.use(bodyParser.urlencoded({extended:true}));
server.use(express.static("./src/js"))

// listen to port
server.listen(5000,()=>console.log('server on'));


// controller calls

const controller = require('../controllers/controller');

server.get('/home',(_,rep)=>{
    rep.render("home.ejs");
})

server.get("/alltask", controller.addTask);
// server.get("/delete", controller.deleteTasks);
server.use("/", controller.afficheTasks);
server.get("/alltask", (request, response) => {
    response.render("alltask.ejs");
});
/* server.use('/', controller.tasksList);
 */

server.get("/alltask", controller.create_table);

