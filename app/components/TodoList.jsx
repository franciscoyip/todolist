var React = require('react');

var Todo = require('Todo');

var TodoList = React.createClass({
  render: function(){
    var {todos} = this.props;
    var self = this;
    var renderTodos = function(){
      return todos.map(function(todo){
        return (
          <Todo key={todo.id} {...todo} onToggle={self.props.onToggle}/>
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

module.exports = TodoList;
