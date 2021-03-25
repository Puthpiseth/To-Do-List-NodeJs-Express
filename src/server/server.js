const router = require('../routers/router.js');
const express = require('express');
const ejs = require('ejs');
const server = express();
server.engine('ejs', ejs.renderFile);
server.set('views', './src/views');
server.use(router);
server.use(express.static("./src/style_sheets/"))
server.use(express.static('./src/assets'));
server.use(express.static('./src/js'));

server.listen(3100,()=>console.log('server on 3100'));