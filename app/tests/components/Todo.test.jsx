var React = require('react');
var ReactDOM = require('react-dom');

var expect = require('expect');

var $ = require('jQuery');

var TestUtils = require('react-addons-test-utils');

//actual Component
var {Todo} = require('Todo');

describe('Todo', function(){
  it('should exist', function(){
    expect(Todo).toExist();
  });

  it('should dispatch TOGGLE_TODO action with id on click', function(){
    var todoData = {
      id: 11,
      text: 'test task',
      completed: true
    };
    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el.get(0));
    expect(spy).toHaveBeenCalledWith({
      type:'TOGGLE_TODO',
      id: 11
    });

  });
});
