var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  propTypes: {
    onToggle: React.PropTypes.func.isRequired,
  },
  handleClick: function(){

  },
  render: function(){
    var {id, text, completed, createdAt, completedAt} = this.props;
    var self = this;

    var renderDate = function(){
      var message = 'Created ';
      var timestamp = createdAt;

      if(completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return (
        message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a')
      );
    };
    return (
      <div onClick={function(){
          self.props.onToggle(id);
        }}>
        <input type="checkbox" checked={completed}/>
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    );
  }
});

module.exports = Todo;
