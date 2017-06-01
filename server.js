var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var parser = bodyParser.urlencoded({extended:false});

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(3000);

var textmang = ["Con","Đường","Cách","Mạng","Còn","Lắm","Gian","Truân"];
var mang = [];
  textmang.forEach(function(element,index) {
    var item={id:index,text:element,active:true};
    mang.push(item);
  }, this);
var count = mang.length;

var history = [];

app.get('/', function(req, res) {
  res.render("index");
});

app.post('/getNotes', function(req, res){

  res.send(filter());
});

app.post('/add', parser, function(req, res){
  var newNote = {id:count++,text:req.body.note,active:true};
  console.log(newNote);
  mang.push(newNote);
  
  res.send(filter());
});

app.post('/delete', parser, function(req, res){
  var id = req.body.idXoa;
  mang[id].active=false;
  res.send(filter());
});

app.post('/update', parser, function(req,res){
  var id = req.body.idEdit;
  mang[id].text= req.body.text;  
  res.send(filter());
})

function filter(){
  return mang.filter((e,i)=>e.active==true);
}
