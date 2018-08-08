import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './normalize.css';
import './style.css';

import TodoList from './components/todo_list_items';
import AddTodo from './components/add_todo';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoList: ['eat', 'sleep', 'code', 'repeat']
        }
    }

    addTodoItem(item) {
        this.setState({
            todoList: [...this.state.todoList, item]
        })
    }

    removeTodoItem(i) {
        //when i remove these two lines, my filter items don't get filtered in the filteredItems var, no idea why..
        //uncomment the next two lines and my items.slice works.. wut?
        // const one = this.state.todoList;
        // const two = one.splice(i, 1);

        const items = this.state.todoList;
        const filteredItems = items.slice(0, i).concat(items.slice(i, items.length));
        console.log(filteredItems);
        
        
        this.setState({
            todoList: [...filteredItems]
        })
    }

    render() {
        return (
            <div className="App">
                <AddTodo 
                    addTodoItem={item => this.addTodoItem(item)}
                    todoList={this.props.todoList} />
                <TodoList 
                    removeTodoItem={index => this.removeTodoItem(index)}
                    todoList={this.state.todoList} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
