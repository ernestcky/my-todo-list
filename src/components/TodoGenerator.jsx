import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default class TodoGenerator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoText: "",
            todo: {
                id: "",
                text: "",
                done: ""
            }
        }
    }

    onChangeText = (event) => {
        this.setState({
            todoText: event.target.value
        });
    }

    submitTodo = () => {
        this.setState({
            todo: {
                id: uuidv4(),
                text: this.state.todoText,
                done: false
            }
        })
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.text}
                    placeholder="type the text"
                    type="text"
                    onChange={this.onChangeText}
                />
                <button onClick={this.submitTodo}>Add</button>
                <br />
                {this.state.todo.id}
                {this.state.todo.text}
                {this.state.todo.done}
            </div>
        )
    }
}