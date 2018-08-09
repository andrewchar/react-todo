import React from 'react';

const RemoveTodoItem = (props) => {
    return (
        <span 
            style={{cursor: 'pointer', border: '1px solid red', margin: '5px'}}
            onClick={() => props.removeTodoItem(props.index)}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x</span>
    )
}

export default RemoveTodoItem;