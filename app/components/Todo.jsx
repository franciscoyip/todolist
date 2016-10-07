var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  propTypes: {
    onToggle: React.PropTypes.func.isRequired,
  },
  render: function(){
    var {id, text, completed, createdAt, completedAt} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
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
      <div className={todoClassName} onClick={function(){
          self.props.onToggle(id);
        }}>
        <div>
          <input type="checkbox" checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo-subtext">{renderDate()}</p>
        </div>
      </div>
    );
  }
});

module.exports = Todo;
