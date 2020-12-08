import React, { Component } from 'react';

export default class TodoItem extends Component {

    toggleTodo = (id) => {
        this.props.toggleTodo(id);
    };

    renderText = (todo) => {
        return todo.done ? (<s>{todo.text}</s>) : todo.text;

    };

    deleteTodo = (id) => {
        this.props.deleteTodo(id);
    }

    render() {
        const todo = this.props.todo;
        return (
            <div>
                <label onClick={() => this.toggleTodo(todo.id)}>
                    {this.renderText(todo)}
                </label>
                <button onClick={() => this.deleteTodo(todo.id)}>x</button>
            </div>
        )
    }
}