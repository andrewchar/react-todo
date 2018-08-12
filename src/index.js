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
            todoList: [
                {
                    id: '13v57',
                    task: 'dishes',
                    done: false
                },
                {
                    id: 'h7325',
                    task: 'drive',
                    done: false
                }
            ]
        }
    }

    addTodoItem(item) {        
        this.setState({
            todoList: this.state.todoList.concat(item)
        })
    }

    removeTodoItem(i) {
        const filteredItems = this.state.todoList.filter((el, index) => index !== i);

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
