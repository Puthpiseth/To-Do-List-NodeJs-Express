// console.log("Hello Piseth");

const express = require("express");
const ejs = require("ejs");
const path = require("path");
const fs = require("fs");
const router = require("../routers/router.js")

const server = express();

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

server.engine("ejs", ejs.renderFile); // 
server.set("view engine", "ejs");
server.use(router);
server.use(express.static("./src/assets")); // pour rendre accessible à tous les dossiers dans assets