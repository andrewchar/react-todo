import React, { Component } from 'react';

class AddTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: {
                task: '',
                id: '',
                done: false
            }
        };

        this.createTodoItem = this.createTodoItem.bind(this);
    }

    componentDidMount() {
        this.createHashId();
    }

    createTodoItem(event) {
        if (event.key === 'Enter') {
            this.createHashId();            
            this.addTodoItem();
            this.clearInputField();
        }
    }

    addTodoItem() {
        this.props.addTodoItem(this.state.inputValue);
    }

    createHashId() {        
        const hash = Math.random().toString(36).replace('0.', '');
        
        this.setState(prevState => ({
            inputValue: {
                ...prevState.inputValue,
                id: hash
            }
        }))
    }

    clearInputField() {
        this.setState(prevState => ({
            inputValue: {
                ...prevState.inputValue,
                task: ""
            }
        }))
    }

    onInputChange(value) {
        this.setState(prevState => ({
            inputValue: {
                ...prevState.inputValue,
                task: value
            }
        }))
    }

    render() {
        return (
            <div>
                <input
                    onChange={event => this.onInputChange(event.target.value)}
                    value={this.state.inputValue.task}
                    onKeyPress={this.createTodoItem} />
            </div>
        );
    }
}

export default AddTodo;