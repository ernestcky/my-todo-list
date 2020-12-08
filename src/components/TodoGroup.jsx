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
        const size = this.props.size;
        const initArraySize = this.initArraySize(size);
        const todoItemArr = initArraySize.map(() => (
            <TodoItem key={uuidv4()}/>
        ));

        return (
            <div>
                {todoItemArr}
            </div>
        )
    }
}