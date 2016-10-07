var React = require('react');

var expect = require('expect');

var $ = require('jQuery');

var TestUtils = require('react-addons-test-utils');

//actual Component
var TodoAPI = require('TodoAPI');

describe('TodoAPI', function(){
  it('should exist', function(){
    expect(TodoAPI).toExist();
  });

  /*
  describe('getTodos', function(){
    it('should return empty array for bad localStorage data', function(){

    })
  });
  */

  describe('filterTodos', function(){
    var todos = [
      {
        id: 1,
        text: 'test 1',
        completed: true
      },
      {
        id: 2,
        text: 'test 2',
        completed: false
      },
      {
        id: 3,
        text: 'test 3',
        completed: true
      },
    ];

    it('should sort by completed status', function(){
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should filter todos by search text', function(){
      var searchText = '3';
      var filteredTodos = TodoAPI.filterTodos(todos, true, searchText);
      expect(filteredTodos.length).toBe(1);
    });

    it('should return all todos search text is empty', function(){
      var searchText = '';
      var filteredTodos = TodoAPI.filterTodos(todos, true, searchText);
      expect(filteredTodos.length).toBe(3);
    });

  });
});
