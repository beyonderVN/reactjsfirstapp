var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var paser = bodyParser.urlencoded({extended:false});

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(3000);

var mang = ["V","K","L"];

app.get('/', function(req, res) {
    res.render("index");
});

app.post('/getNotes', function(req, res){
  res.send(mang);
});

app.post('/add', paser, function(req, res){
  var newNote = req.body.note;
  mang.push(newNote);
  res.send(mang);
});
