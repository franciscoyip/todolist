var $ = require('jquery');

module.exports = {
  setTodos: function(todos){
    if($.isArray(todos)){
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function(){
    var strTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(strTodos);
    } catch (e) {
      //ignore if failed
    }

    return $.isArray(todos) ? todos : [];
  },
  filterTodos: function(todos, showCompleted, searchText) {
    var filteredTodos = todos;
    //Todos

    //Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo)=>{
      return !todo.completed || showCompleted;
    });

    //Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo)=>{
      if(searchText){
        return (todo.text.toLowerCase().indexOf(searchText) !== -1);
      }
      return true;
    });

    //Sort todos with non-completed first
    filteredTodos.sort(function(a, b){
      if(a.completed === false && b.completed === true){
        return -1;
      }else if(a.completed && b.completed === false){
        return 1;
      }
      return 0;
    });

    return filteredTodos;
  }
};
