import React, { Component } from 'react';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <label>{this.props.todo.text}</label>
                <button>x</button>
            </div>
        )
    }
}