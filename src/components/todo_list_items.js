import React from 'react';
import RemoveTodoItem from './remove_todo';

const AddTodo = (props) => {
    const todoItems = props.todoList.map((obj) => {
        return (
            <li key={obj.id}>
                {obj.task}
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