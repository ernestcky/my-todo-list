import { Row, Col, Tag } from "antd";
import React, { Component } from 'react';
import { deleteTodo, updateTodo } from './../apis/todos';
import { DeleteTwoTone } from '@ant-design/icons';

export default class TodoItem extends Component {

    toggleTodo = (id, text, done, tagList) => {
        updateTodo(id, text, done, tagList).then(
            this.props.toggleTodo(id, done)
        );
    };

    renderText = (todo) => {
        return todo.done ? (<s>{todo.text}</s>) : todo.text;
    };

    renderCategory = (todo) => {
        let categoryTagArr = [];
        todo.tagList.forEach(item => {
            categoryTagArr.push(<Tag color={item.color}>{item.content}</Tag>);
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
                onClick={() => this.toggleTodo(todo.todoId, todo.text, todo.done, todo.tagList)}
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
                        <DeleteTwoTone className="button" onClick={() => this.deleteTodo(todo.todoId)} />
                    </Col>
                </Row>
            </div>
        )
    }
}