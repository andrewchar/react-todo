import React, { Component } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    font-size: 2em;
    padding: 16px;
    border: none;
    box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
    width: 100%;

    &::placeholder {
        color: #DBDBDB;
    }

    &:focus {
        outline: none;
    }
`

class AddTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: {
                task: '',
                id: '',
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
                <StyledInput
                    onChange={event => this.onInputChange(event.target.value)}
                    value={this.state.inputValue.task}
                    onKeyPress={this.createTodoItem} 
                    placeholder='Whatcha gatta do?'/>
            </div>
        );
    }
}

export default AddTodo;