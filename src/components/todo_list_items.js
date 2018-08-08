import React from 'react';
import RemoveTodoItem from './remove_todo';

const AddTodo = (props) => {
    const todoItems = props.todoList.map((item, index) => {
        return (
            <li key={index}>
                {item} <RemoveTodoItem index={index} removeTodoItem={props.removeTodoItem} />
            </li>
        )
    });

    return (
        <ul>
            {todoItems}
        </ul>
    );
};

export default AddTodo;