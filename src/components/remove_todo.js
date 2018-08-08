import React, { Component } from 'react';

class RemoveTodoItem extends Component {

    // removeTodoItem(i) {
    //     console.log(i);
    // }

    render() {
        return (
            <span 
                style={{cursor: 'pointer', border: '1px solid red', margin: '5px'}}
                onClick={() => this.props.removeTodoItem(this.props.index)}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x</span>
        )
    }
}

export default RemoveTodoItem;