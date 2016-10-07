var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function(e){
    e.preventDefault();
    var field = this.refs.inputTodo;
    var strTodo = field.value;
    if(strTodo){
      //call the prop function
      //this.props.xxxxx(strTodo)
      field.value = '';
    }
  },
  render: function(){
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit}>
          <input type="text" ref="inputTodo" placeholder="What do you need to do?"/>
          <button className="button extended">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
