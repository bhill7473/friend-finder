//var fs = require("fs");
//var server = require("./server");
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
app.use(express.static('public'));
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/:att", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});
//module.exports = htmlroutes;