import React from 'react';
import styled from 'styled-components';

import getElementID from './remove_todo';

const StyledUl = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
`
const StyledLi = styled.li`
    padding: 15px 20px;
    font-size: 2em;
    background-color: #fff;
    border-bottom: 1px solid #ededed;
    cursor: pointer;
    width: 100%;
    overflow-wrap: break-word;
`

const AddTodo = (props) => {
    const todoItems = props.todoList.map((obj) => {
        return (
            <StyledLi key={obj.id} onClick={() => props.removeTodoItem(getElementID(obj.id))}>
                {obj.task}
            </StyledLi>
        )
    });

    return props.todoList.length > 0 && (
        <StyledUl>
            {todoItems}
        </StyledUl>
    )
};

export default AddTodo;