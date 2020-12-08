import React, { Component } from 'react';

export default class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todo: {
                id: "1234",
                text: "this is the first todo",
                done: false
            },
        };
    }

    render() {
        return (
            <div>
                <label>{this.state.todo.text}</label>
                <button>x</button>
            </div>
        )
    }
}