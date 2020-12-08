import React, { Component } from 'react';
import TodoGroup from './TodoGroup';
import TodoGenerator from './TodoGenerator';

export default class TodoList extends Component {
    render() {
        return (
            <div>
                <TodoGroup />
                <TodoGenerator />
            </div>
        )
    }
}