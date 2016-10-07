var React = require('react');
var ReactDOM = require('react-dom');

var expect = require('expect');

var $ = require('jQuery');

var TestUtils = require('react-addons-test-utils');

//actual Component
var TodoApp = require('TodoApp');

describe('TodoApp', function(){
  it('should exist', function(){
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos state on handleAddTodo', function(){
    var strTask = 'walk'
    var spy = expect.createSpy();
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({
      todos: []
    });
    todoApp.handleAddTodo(strTask);

    expect(todoApp.state.todos[0].text).toBe(strTask);
    expect(todoApp.state.todos.length).toBe(1);
  });

  it('should toggle completed value when handleToggle called', function(){
    var todoData = {
      id: 11,
      text: 'test task',
      completed: false
    };
    var spy = expect.createSpy();
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({
      todos: [todoData]
    });
    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos.length).toBe(1);
  });
});
