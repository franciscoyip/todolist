var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  /*
  propTypes: {
    dispatch: React.PropTypes.func.isRequired,
  },
  */
  onSubmit: function(e){
    e.preventDefault();
    var {dispatch} = this.props;
    var field = this.refs.inputTodo;
    var strTodo = field.value;
    if(strTodo){
      //call the prop function
      //this.props.onAddTodo(strTodo)
      dispatch(actions.addTodo(strTodo));

      field.value = '';
    }else{
      field.focus();
    }
  },
  render: function(){
    return (
      <div className="container-footer">
        <form ref="form" onSubmit={this.onSubmit}>
          <input type="text" ref="inputTodo" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);
//module.exports = AddTodo;
