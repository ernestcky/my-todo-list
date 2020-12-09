import React, { Component } from 'react';
import TodoItemContainer from './../containers/TodoItemContainer';
import { getTodoList } from './../apis/todos';
import { List, Avatar, Button, Skeleton, Row, Col } from 'antd';

export default class TodoGroup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            initLoading: true,
            loading: false,
        };
    };

    componentDidMount() {
        getTodoList().then((response) => {
            this.setState({
                initLoading: false,
            })
            this.props.initTodoArray(response.data)
        })
    }

    render() {
        const { initLoading, loading } = this.state;
        return (
            <Row justify="center" >
                <Col span={12}>
                    <List 
                        className="todolist"
                        loading={initLoading}
                        itemLayout="horizontal"
                        dataSource={this.props.todoArray}
                        renderItem={todo => (
                            <List.Item>
                                <TodoItemContainer key={todo.id} todo={todo} />
                            </List.Item>
                        )}>
                    </List>
                </Col>
            </Row>

        )
    }
}