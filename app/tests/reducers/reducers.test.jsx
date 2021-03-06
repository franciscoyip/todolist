var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers', function(){

  describe('searchTextReducer', ()=>{
    it('should set searchText', ()=>{
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'test'
      };
      var response = reducers.searchTextReducer(df(''), df(action) );
      expect(response).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', ()=>{
    it('should flip showCompleted', ()=>{
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };
      var response = reducers.showCompletedReducer(false, df(action));
      expect(response).toEqual(true);
    });
  });

  describe('todosReducer', ()=>{
    it('should add new todo', ()=>{
      var action = {
        type: 'ADD_TODO',
        text: 'walk dog'
      };
      var response = reducers.todosReducer(df([]), df(action));
      expect(response.length).toEqual(1);
      expect(response[0].text).toEqual(action.text);
    });

    it('should toggle todo completed and add timestamp for completedAt', function(){
      var action = {
        type: 'TOGGLE_TODO',
        id: 11
      };
      var todos = [
        {
          id: 1,
          text: 'what',
          createdAt: moment().unix(),
          completed: false,
          completedAt: null
        },
        {
          id: 11,
          text: 'what 11',
          createdAt: moment().unix(),
          completed: false,
          completedAt: null
        },
        {
          id: 2,
          text: 'what 2',
          createdAt: moment().unix(),
          completed: true,
          completedAt: moment().unix()
        }
      ];

      var response = reducers.todosReducer(df(todos), df(action));
      expect(response.length).toEqual(3);
      expect(response[1].completed).toEqual(true);
      expect(response[1].completedAt).toBeA('number');
    });
  });

});
