const express = require('express');
const ejs = require('ejs');
const bodyParser = require("body-parser");


const server = express();

server.engine('ejs', ejs.renderFile);
server.set('views', './src/views');

// static files
server.use(express.static("./src/style_sheets/"));
server.use(express.static('./src/assets'));
server.use(bodyParser.urlencoded({extended:true}));
server.use(express.static("./src/js"))
// listen to port
server.listen(3000,()=>console.log('server on'));
// controller calls
const controller = require('../controllers/controller');

server.get('/',(_,rep)=>{
    rep.render("home.ejs");
})

server.get('/alltask/description/:id',(req,rep)=>{
    const {id} = req.params;
    rep.render('description.ejs',{id})
})
////////////////////////////
server.get("/alltask",getUrl,  controller.afficheTask);
/////////////////////////////

server.get("/alltask",(request, response) => {
    response.render("alltask.ejs");
});

server.get('/alltask/delete/:id',controller.delete_selected_task);

server.post('/alltask', controller.addTask);

//•••••••••••••••••••••••••••••••••••••••
function getUrl(req,resp,next){
    const id = req.params.id;
    next();
}
