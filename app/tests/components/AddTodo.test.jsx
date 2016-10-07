var React = require('react');
var ReactDOM = require('react-dom');

var expect = require('expect');

var $ = require('jQuery');

var TestUtils = require('react-addons-test-utils');

//actual Component
var AddTodo = require('AddTodo');

describe('AddTodo', function(){
  it('should exist', function(){
    expect(AddTodo).toExist();
  });

  it('should call onAddTodo prop with valid string', function(){
    var strTodo = 'walk the walk';
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));
    addTodo.refs.inputTodo.value = strTodo;
    TestUtils.Simulate.submit($el.find('form').get(0));

    expect(spy).toHaveBeenCalledWith(strTodo);
  });

  it('should not call onAddTodo prop with invalid string', function(){
    var strTodo = '';
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));
    addTodo.refs.inputTodo.value = strTodo;
    TestUtils.Simulate.submit($el.find('form').get(0));

    expect(spy).toNotHaveBeenCalled();
  });

  /*
  describe('formatSeconds', function(){


    it('should format seconds when min/sec are less than 10', function(){
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 61;
      var expected = '01:01';
      var actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });
  });
  */
});
