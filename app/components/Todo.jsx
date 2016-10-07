var React = require('react');

var Todo = React.createClass({
  propTypes: {
    onToggle: React.PropTypes.func.isRequired,
  },
  handleClick: function(){

  },
  render: function(){
    var {id, text, completed} = this.props;
    var self = this;
    return (
      <div onClick={function(){
          self.props.onToggle(id);
        }}>
        <input type="checkbox" checked={completed}/>
        {text}
      </div>
    );
  }
});

module.exports = Todo;
