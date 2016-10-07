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
});
