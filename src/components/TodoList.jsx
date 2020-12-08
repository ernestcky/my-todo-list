import React, { Component } from 'react';
import TodoGroup from './TodoGroup';
import TodoGenerator from './TodoGenerator';
import TodoGeneratorContainer from '../containers/TodoGeneratorContainer'

export default class TodoList extends Component {
    render() {
        return (
            <div>
                <TodoGroup size={3} />
                <TodoGeneratorContainer />
            </div>
        )
    }
}