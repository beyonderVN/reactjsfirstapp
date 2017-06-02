
import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter, match } from 'react-router';
import { Route, IndexRoute } from 'react-router';

import About from './pages/About.jsx'
import History from './pages/History.jsx'
import Nav from './pages/Nav.jsx'
import Home from './pages/Home.jsx'
import Main from './pages/Main.jsx'

/*eslint-disable*/
const router = express.Router();
/*eslint-enable*/

const Routes = (
  <Route>
        <Route exact path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/history" component={History}/>
  </Route>
);
/* GET home page. */
router.get('/', (req, res) => {
  
  match({Routes, location: req.url}, (error, redirectLocation, renderProps) => {
    console.log(error)
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
    //   const content = renderToString(<Router {...renderProps}/>);
    //   res.render('index', {title: 'Express', data: false, content});
      
      const context = {}
      const html = ReactDOMServer.renderToString(React.createClass(StaticRouter ,renderProps));
      res.render('index', {title: 'Express', data: false, html});
    } else {
      res.status(404).send('Not Found');
    }
  });
});


module.exports = router;