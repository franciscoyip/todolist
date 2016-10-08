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
