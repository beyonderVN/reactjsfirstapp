require('babel-register');
import express from "express";
import bodyParser from "body-parser";
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


function filter(){
  return mang.filter((e,i)=>e.active==true);
}


import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { renderToString } from 'react-dom/server'
import reducers from './app/reducers'
import {StaticRouter,Route ,matchPath } from 'react-router-dom';

import About from './app/pages/About.jsx'
import History from './app/pages/History.jsx'
import Nav from './app/pages/Nav.jsx'
import Home from './app/pages/Home.jsx'
import Main from './app/pages/Main.jsx'
import AppRoutes from './app/pages/Main.jsx'

import { match, RouterContext } from 'react-router'


// We are going to fill these out in the sections to follow
function handleRender(req, res) { 

  // let preloadedState = { list: filter() }
  let preloadedState = { list: [] }
  const store = createStore(reducers, preloadedState)
  // Render the component to a string
  console.log(store.getState());
  const context = {}
  const html = renderToString(
    <StaticRouter location={req.url} context ={context}>
      <Provider store={store}>
        <Route path="/" component={AppRoutes} />
      </Provider>
    </StaticRouter>
  )

  // Grab the initial state from our Redux store
  const finalState = store.getState()
  // Send the rendered page back to the client

  res.send(renderFullPage(html, preloadedState))
}

function renderFullPage(html, preloadedState) {
  return `
    <html lang="en">
    <head>
        <title>DemoNodeJs</title>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
    <style >
      .mauvang{
        background-color: yellow;
      }
      .wrapper{
        width: 100%;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-flow: row wrap;
        justify-content: center;
      }
      .appwrap{
        margin: 10px;
        width: 400px;
        position: relative;
      }
      .list{
        height: 500px;
        overflow-y: scroll;
        overflow-x: hidden;
        padding-bottom: 10px;
        padding: 20px;
      }
      .page{
        padding: 20px;
      }
      .hover_scale1:hover {
          overflow: auto;
          margin: 0px -10px;
          -webkit-box-shadow: 0 0 4px rgba(34, 44, 55, 0.5);
          -moz-box-shadow: 0 0 4px rgba(34, 44, 55, 0.5);
          box-shadow: 0 0 4px rgba(34, 44, 55, 0.5);
          -webkit-transition: all .25s;
          -moz-transition: all .25s;
          transition: all .25s;
      }
      .hover_scale:hover {
        -ms-transform: scale(1.1); /* IE 9 */
        -webkit-transform: scale(1.1); /* Safari */
        transform: scale(1.1);
        -webkit-box-shadow: 0 0 4px rgba(34, 44, 55, 0.5);
          -moz-box-shadow: 0 0 4px rgba(34, 44, 55, 0.5);
          box-shadow: 0 0 4px rgba(34, 44, 55, 0.5);
      }
      .hover_scale {
        -ms-transform: scale(1); /* IE 9 */
        -webkit-transform: scale(1); /* Safari */
        transform: scale(1);
        -webkit-box-shadow: 0 0 4px rgba(34, 44, 55, 0.5);
          -moz-box-shadow: 0 0 4px rgba(34, 44, 55, 0.5);
          box-shadow: 0 0 4px rgba(34, 44, 55, 0.5);
        -webkit-transition: all .25s;
          -moz-transition: all .25s;
          transition: all .25s;
      }
      .div-add{
        position: absolute;
        top: 20px;
        left: 20px;
        right: 20px;
        background: white;
        padding: 20px;
        opacity: 1;
        -webkit-transition: all .25s;
          -moz-transition: all .25s;
          transition: all .25s;
        -webkit-box-shadow: 0 0 4px rgba(34, 44, 55, 0.5);
        -moz-box-shadow: 0 0 4px rgba(34, 44, 55, 0.5);
        box-shadow: 0 0 4px rgba(34, 44, 55, 0.5);
        z-index: 9;
      }
      .div-add.hide{
          top:-220px;
          opacity: 0;
      }
    </style>
    <body>
      <div class="w3-main w3-row-padding wrapper ">
        <div class="w3-container w3-card-2 w3-padding appwrap w3-light-grey w3-animate-zoom animation">
          <h1 class="" style="text-align:center;">SIMPLE NOTE</h1>
          <div id="app" class="">${html}</div>     
        </div>
      </div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" ></script>
        <script type="text/javascript" src="../js/bundle.js" ></script>
        </body>
        </html>
    `
}


const renderRouter = express.Router();


renderRouter.get('/', function(req, res) {
  console.log("req.location");
  console.log(req.url);
  handleRender(req, res)
});

const apiRouter = express.Router();

app.use('/*',renderRouter);
app.use('/api',apiRouter);

apiRouter.post('/getNotes', function(req, res){
  res.send(filter());
});

apiRouter.post('/add', parser, function(req, res){
  var newNote = {id:count++,text:req.body.note,active:true};
  console.log(newNote);
  mang.push(newNote);
  res.send(filter());
});

apiRouter.post('/delete', parser, function(req, res){
  var id = req.body.idXoa;
  mang[id].active=false;
  res.send(filter());
});

apiRouter.post('/update', parser, function(req,res){
  var id = req.body.idEdit;
  mang[id].text= req.body.text;  
  res.send(filter());
})

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


