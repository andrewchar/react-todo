import React from 'react';
import styled from 'styled-components';

import getElementID from './remove_todo';

const Ul = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
`
const Li = styled.li`
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
            <Li key={obj.id} onClick={() => props.removeTodoItem(getElementID(obj.id))}>
                {obj.task}
            </Li>
        )
    });

    return (
        <Ul>
            {todoItems}
        </Ul>
    );
};

export default AddTodo;