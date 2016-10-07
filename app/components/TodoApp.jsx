var React = require('react');
//var Search
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'clean yard'
        },
        {
          id: 3,
          text: 'cook',
        },
        {
          id: 4,
          text: 'play'
        }
      ]
    };
  },
  render: function(){
    var {todos} = this.state;

    return (
      <div>
        <h1>TodoApp Component</h1>
        <TodoList todos={todos}/>
        <AddTodo/>
      </div>
    );
  },
});

module.exports = TodoApp;
