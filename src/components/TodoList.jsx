import React, { Component } from 'react';
import TodoGeneratorContainer from '../containers/TodoGeneratorContainer'
import TodoGroupContainer from '../containers/TodoGroupContainer';
export default class TodoList extends Component {
    render() {
        return (
            <div>
                <TodoGroupContainer/>
                <TodoGeneratorContainer />
            </div>
        )
    }
}