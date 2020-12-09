import React, { Component } from 'react';
import TodoItemContainer from './../containers/TodoItemContainer';
import { getTodoList } from './../apis/todos';

export default class TodoGroup extends Component {

    constructor(props) {
        super(props);
    };

    componentDidMount() {
        getTodoList().then((response) => {
            this.props.initTodoArray(response.data)
        })
    }

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