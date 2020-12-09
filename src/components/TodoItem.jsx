import Item from "antd/lib/list/Item";
import React, { Component } from 'react';
import { deleteTodo, updateTodo } from './../apis/todos';

export default class TodoItem extends Component {

    toggleTodo = (id, done) => {
        updateTodo(id, done).then(
            this.props.toggleTodo(id, done)
        );
    };

    renderText = (todo) => {
        return todo.done ? (<s>{todo.text}</s>) : todo.text;
    };

    renderCategory = (todo) => {
        let categoryString = "";
        todo.category.forEach(Item => {
            console.log(Item)
            categoryString += Item + " "
        });
        return categoryString;
    }

    deleteTodo = (id) => {
        deleteTodo(id).then(
            this.props.deleteTodo(id)
        )
    }

    render() {
        const todo = this.props.todo;
        return (
            <div onClick={() => this.toggleTodo(todo.id, todo.done)}>
                <label>
                    {this.renderText(todo)}
                </label>

                <label>{this.renderCategory(todo)}</label>

                <button onClick={() => this.deleteTodo(todo.id)}>x</button>
            </div>
        )
    }
}