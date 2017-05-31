var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var parser = bodyParser.urlencoded({extended:false});

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

app.post('/add', parser, function(req, res){
  var newNote = req.body.note;
  mang.push(newNote);
  res.send(mang);
});

app.post('/delete', parser, function(req, res){
  var id = req.body.idXoa;
  mang.splice(id,1);
  res.send(mang);
});

app.post('/update', parser, function(req,res){
  var id = req.body.idEdit;
  mang[id]= req.body.text;
  console.log(mang);
  res.send(mang);
})
