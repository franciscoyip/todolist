var React = require('react');

//node lib
var uuid = require('node-uuid');

var TodoSearch = require('TodoSearch');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog',
          completed: false
        },
        {
          id: uuid(),
          text: 'clean yard',
          completed: true
        },
        {
          id: uuid(),
          text: 'cook',
          completed: false
        },
        {
          id: uuid(),
          text: 'play',
          completed: true
        }
      ]
    };
  },
  handleAddTodo: function(strTodo){
    this.setState({
      todos: [...this.state.todos, {
        text: strTodo,
        id: uuid(),
        completed: false
      }]
    });
  },
  handleSearch: function(showCompleted, text){
    this.setState({
      showCompleted: showCompleted,
      searchText: text.toLowerCase()
    });
  },
  handleToggle: function(id){
    var updatedTodos = this.state.todos.map(function(todo){
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos
    });
  },
  render: function(){
    var {todos} = this.state;

    return (
      <div>
        <h1>TodoApp</h1>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  },
});

module.exports = TodoApp;
