var React = require('react');
var ReactDOM = require('react-dom');
// var {Router, Route, IndexRoute,browserHistory} = require('react-router');
var {Router,HashRouter,BrowserRouter ,Link,Route,IndexRoute} = require('react-router-dom');
var About = require('./pages/About.jsx');
var History = require('./pages/History.jsx');
var Nav = require('./pages/Nav.jsx');
var Home = require('./pages/Home.jsx');
var Main = require('./pages/Main.jsx');



ReactDOM.render(
  <BrowserRouter >
    <BrowserRouter>
      <Main >
        <Route exact path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/history" component={History}/>
      </Main>
    </BrowserRouter >
  </BrowserRouter >
  
  ,
  document.getElementById('app')
);
