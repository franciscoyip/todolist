var React = require('react');

//connect to the Provider pass down by root component
var {connect} = require('react-redux');
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({
  render: function(){
    var {todos, showCompleted, searchText} = this.props;
    var self = this;
    var renderTodos = function(){
      if(todos.length === 0){
        return <p className="container-msg">No Tasks</p>;
      }
      return TodoAPI.filterTodos(todos, showCompleted, searchText).map(function(todo){
        return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

export default connect(
  //state this component need
  (state)=>{
    return state;
  }
)(TodoList);
