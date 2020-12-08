import React, { Component } from 'react';

export default class TodoItem extends Component {

    toggleTodo = (id) => {
        this.props.toggleTodo(id);
    };

    renderText = (todo) => {
        return todo.done ? (<s>{todo.text}</s>) : todo.text;

    };

    render() {
        const todo = this.props.todo;
        return (
            <div>
                <label onClick={() => this.toggleTodo(todo.id)}>
                    {this.renderText(todo)}
                </label>
                <button>x</button>
            </div>
        )
    }
}