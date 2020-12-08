import React, { Component } from 'react';
import TodoItem from './TodoItem';
import {v4 as uuidv4} from 'uuid';

export default class TodoList extends Component {

    constructor(props) {
        super(props);
    };

    initArraySize = (number) => {
        return Array.from(Array(number).keys());
    };

    render() {
        const todoArray = this.props.todoArray;
        console.log(todoArray);
        return (
            <div>
                {todoArray.map((todo) => {
                    <TodoItem key={uuidv4()} todo={todo}/>
                })}
            </div>
        )
    }
}