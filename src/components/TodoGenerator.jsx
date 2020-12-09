import React, { Component } from 'react';
import { addNewTodo } from "../apis/todos";
import { Checkbox, Button} from 'antd';

const CheckboxGroup = Checkbox.Group;

export default class TodoGenerator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoText: "",
            checkedCategory: []
        }
    }

    onChangeText = (event) => {
        this.setState({
            todoText: event.target.value
        });
    }

    onChangeCategory = (categoryList) => {
        this.setState({
            checkedCategory: categoryList
        })
    }

    submitTodo = () => {
        addNewTodo(this.state.todoText, this.state.checkedCategory).then(response => this.props.submitTodo(response.data));
        this.setState({
            todoText: "",
            checkedCategory: []
        })
    }

    render() {
        const categoryOptions = ['Shopping', 'Fruit', 'Vegetables', 'Habit', 'Everyday', 'Other'];
        return (
            <div style={{
                margin: "10px"
            }}>
                <input
                    value={this.state.todoText}
                    placeholder="type the text"
                    type="text"
                    onChange={this.onChangeText}
                />

                <CheckboxGroup options={categoryOptions} value={this.state.checkedCategory} onChange={this.onChangeCategory} />
                <Button type="primary" onClick={this.submitTodo}>Add</Button>
                <br />
            </div>
        )
    }
}