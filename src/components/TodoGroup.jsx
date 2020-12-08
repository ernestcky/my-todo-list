import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { v4 as uuidv4 } from 'uuid';
import TodoItemContainer from './../containers/TodoItemContainer';

export default class TodoGroup extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        const todoArray = this.props.todoArray;
        return (
            <div>
                {todoArray.map((todo) => (
                    <TodoItemContainer key={uuidv4()} todo={todo} />
                ))}
            </div>
        )
    }
}