var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = (state = '', action)=>{

  var type = action.type;

  switch (type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
      //break;
    default:
      return state;
      //break;
  }

};

export var showCompletedReducer = (state = false, action)=>{

  var type = action.type;

  switch (type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
      //break;
    default:
      return state;
      //break;
  }

};

export var todosReducer = (state = [], action)=>{

  var type = action.type;

  switch (type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: uuid(),
          text: action.text,
          createdAt: moment().unix(),
          completedAt: null
        }
      ];
      //break;
    case 'TOGGLE_TODO':
      return state.map((o)=>{
        var todo = Object.assign({}, o);
        if(todo.id === action.id){
          todo.completed = !todo.completed;
          todo.completedAt = todo.completed ? moment().unix() : null;
          return todo;
        }
        return todo;
      });
    default:
      return state;
      //break;
  }

};
