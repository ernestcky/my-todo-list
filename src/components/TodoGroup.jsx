import React, { Component } from 'react';
import TodoItemContainer from './../containers/TodoItemContainer';

export default class TodoGroup extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        const todoArray = this.props.todoArray;
        console.log(todoArray)
        return (
            <div>
                {todoArray.map(todo => 
                    <TodoItemContainer key={todo.id} todo={todo} />
                )}
            </div>
        )
    }
}