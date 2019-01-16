var express = require("express");
var bodyParser = require("body-parser");
var ejs = require("ejs");
var engine = require("ejs-mate");

var app = express();

// Setup Engine
app.engine("ejs", engine);
app.set("view engine", "ejs" );

// Setup middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Home
app.get("/", function(req, res, next){
    res.render("home", {name: "Agung"});
});

// about
app.get("/about", function(req, res, next){
    res.render("about");
});

// Server
app.listen(3000);
