var React = require('react');

//connect to the Provider pass down by root component
var {connect} = require('react-redux');
import Todo from 'Todo';
//var Todo = require('Todo');

export var TodoList = React.createClass({
  render: function(){
    var {todos} = this.props;
    var self = this;
    var renderTodos = function(){
      if(todos.length === 0){
        return <p className="container-msg">No Tasks</p>;
      }
      return todos.map(function(todo){
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
    return {todos: state.todos};
  }
)(TodoList);
