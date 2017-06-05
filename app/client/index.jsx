import React from 'react'
import ReactDOM from 'react-dom'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import About from './pages/About.jsx'
import History from './pages/History.jsx'
import Nav from './pages/Nav.jsx'
import Home from './pages/Home.jsx'
import Main from './pages/Main.jsx'

import reducers from './reducers.jsx'
import { createStore  } from 'redux'
import { Provider  } from 'react-redux'

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

// Create Redux store with initial state
const store = createStore(reducers, preloadedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

console.log("preloadedState = window.__PRELOADED_STATE__="+store.getState());

import App from './pages/Main.jsx'

ReactDOM.render(
  <Router >
    <Provider store={store}>
      <Route path="/" component={App} />
    </Provider>
  </Router>
  ,
  document.getElementById('app')
);

