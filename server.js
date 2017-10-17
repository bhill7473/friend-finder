
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//html routes
app.use(express.static('public'));
app.get("/survey.html", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});
app.get("/:att", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
  });
//api routes
app.use(express.static('routuing'));
app.get("/api/friends", function(req, res) {
  res.sendFile(path.join(__dirname, "app/data/friends.js"));
  
});
app.post("/api/friends", function(req, res) {
	var newfriend = {name:name,photo:link,scores:array};
	friends.push(newfriend);
	res.JSON(friends);
  res.sendFile(path.join(__dirname, "app/data/friends.js"));
  
});

app.listen(PORT, function() {
  console.log(`our app is running on port ${ PORT }`);
});
