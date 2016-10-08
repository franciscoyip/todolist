var expect = require('expect');
var actions = require('actions');

describe('Actions', function(){
  it('should exist', function(){
    expect(actions).toExist();
  });

  it('should generate search text action', function(){
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText:'test text'
      };

      var resultAction = actions.setSearchText(action.searchText);

      expect(resultAction).toEqual(action);
  });

  it('should generate add todo action', function(){
      var action = {
        type: 'ADD_TODO',
        text:'test text'
      };

      var resultAction = actions.addTodo(action.text);

      expect(resultAction).toEqual(action);
  });

  it('should generate toggle show completed', function(){
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      var resultAction = actions.toggleShowCompleted();

      expect(resultAction).toEqual(action);
  });

  it('should generate toggle todo action', function(){
      var action = {
        type: 'TOGGLE_TODO',
        id: 11
      };

      var resultAction = actions.toggleTodo(action.id);

      expect(resultAction).toEqual(action);
  });

});
