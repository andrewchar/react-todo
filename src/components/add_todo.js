import React, { Component } from 'react';

class AddTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ''
        };

        this.updateTodoList = this.updateTodoList.bind(this);
    }

    updateTodoList(event) {
        if (event.key === 'Enter') {            
            this.props.addTodoItem(this.state.inputValue);
            this.clearInputField();
        }
        
    }

    clearInputField() {
        this.setState({
            inputValue: ''
        })
    }

    onInputChange(value) {
        this.setState({
            inputValue: value
        })
    }

    render() {
        return (
            <div>
                <input
                    onChange={event => this.onInputChange(event.target.value)}
                    value={this.state.inputValue}
                    onKeyPress={this.updateTodoList} />
            </div>
        );
    }
}

export default AddTodo;