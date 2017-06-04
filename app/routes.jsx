
import React from 'react';
import ReactDOM from 'react-dom'
import { Route } from 'react-router-dom';

import About from './pages/About.jsx'
import History from './pages/History.jsx'
import Nav from './pages/Nav.jsx'
import Home from './pages/Home.jsx'
import Main from './pages/Main.jsx'

const App = () => (
    <Main>
      <Route exact path="/" component={Home}/>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/history" component={History}/>
    </Main>
)

module.exports = App;