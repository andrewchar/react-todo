import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './normalize.css';
import './style.css';
import styled from 'styled-components';

import TodoList from './components/todo_list_items';
import AddTodo from './components/add_todo';
import Footer from './components/footer';

const AppWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const InnerWrapper = styled.div`
    width: 500px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`

const Title = styled.h1`
    text-align: center;
    font-size: 5em;
    color: #E65349;
    margin-bottom: 1rem;
`;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoList: [],
            itemsLeft: 0
        }

        this.addTodoItem = this.addTodoItem.bind(this);
        this.removeTodoItem = this.removeTodoItem.bind(this);
    }

    addTodoItem(item) {        
        this.setState({
            todoList: this.state.todoList.concat(item),
            itemsLeft: this.state.itemsLeft + 1
        })
    }

    removeTodoItem(i) {
        const filteredItems = this.state.todoList.filter((el) => el.id !== i);        

        this.setState({
            todoList: [...filteredItems],
            itemsLeft: this.state.itemsLeft - 1 
        })
    }

    render() {
        return (
            <AppWrapper>
                <div className="App">
                    <Title>Todo</Title>
                    <InnerWrapper>
                        <AddTodo 
                            addTodoItem={item => this.addTodoItem(item)}
                            todoList={this.props.todoList} />
                        <TodoList 
                            removeTodoItem={index => this.removeTodoItem(index)}
                            todoList={this.state.todoList} />
                        <Footer activeTasks={this.state.itemsLeft}></Footer>
                    </InnerWrapper>
                </div>
            </AppWrapper>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));