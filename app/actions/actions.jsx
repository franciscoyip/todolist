export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText //eq to ES5 searchText:searchText
  }
};

export var addTodo = (text) =>{
  return {
    type: 'ADD_TODO',
    text
  };
};

export var addTodos = (todos)=>{
  return {
    type: 'ADD_TODOS',
    todos
  };
};

/*
export var startAddTodos = ()=>{
  return (dispatch, getState) =>{

    //get promise
    return axios......then((res)=>{
      //some data


      //dispatch(addTodos(data))
    });
  };
};
*/

export var toggleShowCompleted = () =>{
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

export var toggleTodo = (id) =>{
  return {
    type: 'TOGGLE_TODO',
    id
  };
};
