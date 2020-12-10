import React, { Component } from 'react';
import { addNewTodo } from "../apis/todos";
import { Checkbox, Button } from 'antd';
import { getTagList } from './../apis/todos';

const CheckboxGroup = Checkbox.Group;

export default class TodoGenerator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoText: "",
            checkedCategory: []
        }
    }

    componentDidMount = () => {
        getTagList().then((response) => {
            this.props.initTagArray(response.data)
        })
    }

    onChangeText = (event) => {
        this.setState({
            todoText: event.target.value
        });
    }

    onChangeCategory = (categoryList) => {
        const checkedTag
             = this.props.tagArray
                .filter((tag) => (categoryList.indexOf(tag.content) > -1)
        )
        this.setState({
            checkedCategory: checkedTag
        })
    }

    submitTodo = () => {
        addNewTodo(this.state.todoText, this.state.checkedCategory)
            .then(response => this.props.submitTodo(response.data));
        this.setState({
            todoText: "",
            checkedCategory: []
        })
    }

    render() {
        // todo: from db
        // todo: allow add, delete
        const categoryOptions = this.props.tagArray.map(tag =>
            tag.content
        )

        const checkedCategory = this.state.checkedCategory.map(tag => tag.content)
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

                <CheckboxGroup options={categoryOptions} value={checkedCategory} onChange={this.onChangeCategory} />
                <Button type="primary" onClick={this.submitTodo}>Add</Button>
                <br />
            </div>
        )
    }
}