var expect = require('expect');
var reducers = require('reducers');

describe('Reducers', function(){

  describe('searchTextReducer', ()=>{
    it('should set searchText', ()=>{
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'test'
      };
      var response = reducers.searchTextReducer('', action);
      expect(response).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', ()=>{
    it('should flip showCompleted', ()=>{
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };
      var response = reducers.showCompletedReducer(false, action);
      expect(response).toEqual(true);
    });
  });

});
