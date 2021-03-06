var React = require('react');
require('./css/todoitem.css');

// Create TodoItem Component
var TodoItem = React.createClass({
    render: function() {
        return (
            <li>
                <div className="todo-item">
                    <span className="item-name">{this.props.item}</span>
                    <span className="item-delete" onClick={this.handleDelete}> x </span>
                </div>
            </li>
        )
    },
    // Custom functions
    handleDelete: function () {
        this.props.onDelete(this.props.item);
    }
});

module.exports = TodoItem;