var redux = require('redux');
var thunk = require('redux-thunk').default;
var {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');

export var configure = (initialState={})=>{
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  //weird
  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;

};
