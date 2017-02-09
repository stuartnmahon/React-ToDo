var React = require('react');
var ReactDOM = require('react-dom');
import {Router, Route, browserHistory, Link} from 'react-router';
require('./css/index.css');

// Module Requires/Imports
var TodoItem = require('./todoitem');
var AddItem = require('./addItem');
var About = require('./about');

var App = React.createClass({
   render: function () {
       return(
            <Router history={browserHistory}>
                <Route path={'/'} component={TodoComponent}></Route>
                <Route path={'/about'} component={About}></Route>
            </Router>
       );
   }
});

// Create Component
var TodoComponent = React.createClass({
    getInitialState: function(){
        return{
            todos: ["Shower", "Coffee", "Ride", "Work"]
        }
    },
   render: function () {
       var todos = this.state.todos;
       todos = todos.map(function (item, index) {
            return(
                <TodoItem item={item} key={index} onDelete={this.onDelete} />
            )
       }.bind(this));
       return(
           <div id="todo-list">
                <Link to={'/about'}>About</Link>
                <p>Before you forget...</p>
                <ul>{todos}</ul>
               <AddItem onAdd={this.onAdd} />
           </div>
       );
   }, // render

    // Custom functions
    onDelete: function (item) {
        var updatedTodos = this.state.todos.filter(function (val,index) {
            return item !== val;
        });
        this.setState({
           todos: updatedTodos
        });
    },
    
    onAdd: function (item) {
        var updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos: updatedTodos
        })
    },

    // lifecycle functions
    componentWillMount: function () {
        console.log('componentWillMount');
    },
    componentDidMount: function () {
        console.log('componentDidMount');
        // any grabbing of external data
    },
    componentWillUpdate: function () {
        console.log('componentWillUpdate');
    }
});

ReactDOM.render(<App />, document.getElementById('todo-wrapper'));