var React = require('react');
var ReactDOM = require('react-dom');

var expect = require('expect');

var $ = require('jQuery');

var TestUtils = require('react-addons-test-utils');

//actual Component
var Todo = require('Todo');

describe('Todo', function(){
  it('should exist', function(){
    expect(Todo).toExist();
  });

  it('should call onToggle prop with id on click', function(){
    var todoData = {
      id: 11,
      text: 'test task',
      completed: true
    };
    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el.get(0));
    expect(spy).toHaveBeenCalledWith(11);

  });
});
