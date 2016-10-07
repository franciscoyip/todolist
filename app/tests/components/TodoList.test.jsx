var React = require('react');
var ReactDOM = require('react-dom');

var expect = require('expect');

var $ = require('jQuery');

var TestUtils = require('react-addons-test-utils');

//actual Component
var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', function(){
  it('should exist', function(){
    expect(TodoList).toExist();
  });

  it('should render one Todo Component for each todo item', function(){

    var todos=[
      {
        id: 1,
        text: 'Walk the dog'
      },
      {
        id: 2,
        text: 'clean yard'
      }
    ];

    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponents.length).toBe(todos.length);
  });

});
