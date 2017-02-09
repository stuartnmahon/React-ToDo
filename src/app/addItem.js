var React = require('react');
require('./css/addItem.css');

var AddItem = React.createClass({
   render: function () {
       return(
           <form id="add-todo" onSubmit={this.handleSubmit}>
               <input type="text" placeholder="Add something to do..." ref="newItem" required />
               <input type="submit" value="Add Item" />
           </form>
       );
   },

    // Custom functions
    handleSubmit: function(e) {
        e.preventDefault();
        this.props.onAdd(this.refs.newItem.value)
    }
});

module.exports = AddItem;