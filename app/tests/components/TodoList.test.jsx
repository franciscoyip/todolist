var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');

var $ = require('jQuery');

var TestUtils = require('react-addons-test-utils');

//actual Component
//var TodoList = require('TodoList');
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';
//var Todo = require('Todo');
import {configure} from 'configureStore';

describe('TodoList', function(){
  it('should exist', function(){
    expect(TodoList).toExist();
  });

  it('should render one Todo Component for each todo item', function(){

    var todos=[
      {
        id: 1,
        text: 'Walk the dog',
        completed: false,
        completedAt: null,
        createdAt: 500
      },
      {
        id: 2,
        text: 'clean yard',
        completed: false,
        completedAt: null,
        createdAt: 500
      }
    ];

    var store = configure({todos: todos});
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList/>
      </Provider>
    );
    var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

    expect(todosComponents.length).toBe(todos.length);
  });

  it('should render empty message if no todo item', function(){

    var todos=[];

    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container-msg').length).toBe(1);
  });

});
