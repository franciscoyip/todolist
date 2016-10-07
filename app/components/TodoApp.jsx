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
          text: 'Walk the dog'
        },
        {
          id: uuid(),
          text: 'clean yard'
        },
        {
          id: uuid(),
          text: 'cook',
        },
        {
          id: uuid(),
          text: 'play'
        }
      ]
    };
  },
  handleAddTodo: function(strTodo){
    this.setState({
      todos: [...this.state.todos, {
        text: strTodo,
        id: uuid()
      }]
    });
  },
  handleSearch: function(showCompleted, text){
    this.setState({
      showCompleted: showCompleted,
      searchText: text.toLowerCase()
    });
  },
  render: function(){
    var {todos} = this.state;

    return (
      <div>
        <h1>TodoApp</h1>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  },
});

module.exports = TodoApp;
