import { Row, Col, Tag } from "antd";
import React, { Component } from 'react';
import { deleteTodo, updateTodo } from './../apis/todos';
import {DeleteTwoTone} from '@ant-design/icons';

const color = {
    Shopping: "magenta",
    Fruit: "cyan",
    Vegetables: "green",
    Habit: "gold",
    Everyday: "orange",
    Other: "purple",

}

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
        let categoryTagArr = [];
        todo.category.forEach(Item => {
            categoryTagArr.push(<Tag color={color[Item]}>{Item}</Tag>);
        });
        return categoryTagArr;
    }


    deleteTodo = (id) => {
        deleteTodo(id).then(
            this.props.deleteTodo(id)
        )
    }

    render() {
        const todo = this.props.todo;
        return (
            <div
                onClick={() => this.toggleTodo(todo.id, todo.done)}
                style={{
                    width: '100%'
                }}
            >
                <Row justify="center">
                    <Col span={10} className="todoMessage">
                        <label className="todoMsg">
                            {this.renderText(todo)}
                        </label>
                    </Col>
                    <Col span={7} offset={5}>
                        {this.renderCategory(todo)}
                    </Col>
                    <Col span={1}>
                        <DeleteTwoTone className="button" onClick={() => this.deleteTodo(todo.id)} />
                    </Col>
                </Row>
            </div>
        )
    }
}