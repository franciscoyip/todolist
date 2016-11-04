var React = require('react');
var ReactDOM = require('react-dom');

var expect = require('expect');

var $ = require('jQuery');

var TestUtils = require('react-addons-test-utils');

//actual Component
import {TodoSearch} from 'TodoSearch';

describe('Search', function(){
  it('should exist', function(){
    expect(TodoSearch).toExist();
  });

  it('should dispatch SET_SEARCH_TEXT on input text change', function(){
    var searchText = 'walk'
    var spy = expect.createSpy();
    var action = {
      type:'SET_SEARCH_TEXT',
      searchText
    };
    //var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);
    //expect(spy).toHaveBeenCalledWith(false, searchText);
    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should dispatch TOGGLE_SHOW_COMPLETED with checkbox checked value', function(){
    var spy = expect.createSpy();
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);
    expect(spy).toHaveBeenCalledWith(action);
  });

});
