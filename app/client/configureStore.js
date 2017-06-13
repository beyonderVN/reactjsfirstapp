import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga/";
import reducers from '../reducers'
import saga from '../sagas.js'

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

// add the middlewares
let middlewares = [];

// add the saga middleware
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

// apply the middleware
let middleware = applyMiddleware(...middlewares);

// add the redux dev tools

middleware = compose(middleware,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Create Redux store with initial state
const store = createStore(reducers
                , preloadedState
                // , middleware
                ,applyMiddleware(sagaMiddleware)
            )
console.log("preloadedState = window.__PRELOADED_STATE__");
console.log(store.getState());
sagaMiddleware.run(saga);

export { store };