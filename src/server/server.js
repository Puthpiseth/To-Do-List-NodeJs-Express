const express = require('express');
const ejs = require('ejs');
const bodyParser = require("body-parser");

const server = express();
server.engine('ejs', ejs.renderFile);
server.set('views', './src/views');

server.use(express.static("./src/style_sheets/"));
server.use(express.static('./src/assets'));
server.use(bodyParser.urlencoded({extended:true}));
server.listen(5000,()=>console.log('server on'));

////////////////////////////////////////////////////////
//############ controller calls #########################@

const controller = require('../controllers/controller');

server.get('/',(_,rep)=>{
    rep.render("home.ejs");
})
server.post('/', controller.addTask);
server.use("/",controller.afficheTasks);
/* server.use('/', controller.tasksList);
 */

server.post("/alltask", controller.create_table);
