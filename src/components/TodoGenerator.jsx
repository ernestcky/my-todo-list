import React, { Component } from 'react';
import { addNewTodo } from "../apis/todos";

export default class TodoGenerator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoText: ""
        }
    }

    onChangeText = (event) => {
        this.setState({
            todoText: event.target.value
        });
    }

    submitTodo = () => {
        addNewTodo(this.state.todoText).then(response => this.props.submitTodo(response.data));
        this.setState({
            todoText: ""
        })
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.todoText}
                    placeholder="type the text"
                    type="text"
                    onChange={this.onChangeText}
                />
                <button onClick={this.submitTodo}>Add</button>
                <br />
            </div>
        )
    }
}