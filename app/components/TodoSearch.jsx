var React = require('react');

var TodoSearch = React.createClass({
  propTypes: {
    onSearch: React.PropTypes.func.isRequired,
  },
  handleSearch: function(e){
    //e.preventDefault();
    var searchText = this.refs.searchText.value;
    var showCompleted = this.refs.showCompleted.checked;
    this.props.onSearch(showCompleted, searchText);
  },
  render: function(){
    return (
      <div>
        <div>
          <input type="search" ref="searchText" placeholder="Search for todos?" onChange={this.handleSearch}/>
        </div>
        <div>
          <label><input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/> Show completed todos</label>
        </div>
      </div>
    );
  }
});

module.exports = TodoSearch;
