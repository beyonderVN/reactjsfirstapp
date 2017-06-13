

var redux = require('redux')

var listReducer = (state = [], action) => {
    switch (action.type) {
        
        case 'ADD':
            return [...action.list]
        case 'UPDATE':
            return [...action.list]
        case 'DELETE':
            return [...action.list]
        default:
            return state;
    }
}

var isAddingReducer = (state = false,action) => {
    console.log(action);
    switch (action.type) {
        case 'TOGGLE':
            return !state;
        default:
            return state;
    }
}

var reducer = redux.combineReducers({
    list : listReducer,
    isAdding: isAddingReducer
});


module.exports = reducer;