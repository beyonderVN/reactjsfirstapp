import React from 'react'
import ReactDOM from 'react-dom'

import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'


import App from '../pages/Main.jsx'
import reducers from '../reducers.jsx'
import { createStore  } from 'redux'
import { Provider  } from 'react-redux'

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

// Create Redux store with initial state
const store = createStore(reducers, preloadedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

console.log("preloadedState = window.__PRELOADED_STATE__");
console.log(store.getState());

// new khong ho tro BrowserRouter se reload trang yeu cau ho tro rendering server
const supportsHistory = 'pushState' in window.history

ReactDOM.render(
  <BrowserRouter forceRefresh={!supportsHistory}>
    <Provider store={store}>
      <Route path="/" 
        component={App} 
      />
    </Provider>
  </BrowserRouter>
  ,
  document.getElementById('app')
);

