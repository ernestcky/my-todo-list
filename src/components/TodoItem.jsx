import React, { Component } from 'react';

export default class TodoItem extends Component {

    render() {
        console.log(this.props.todo)
        return (
            <div>
                <label>{this.props.todo.text}</label>
                <button>x</button>
            </div>
        )
    }
}