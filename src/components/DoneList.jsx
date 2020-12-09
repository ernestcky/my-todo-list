import React, { Component } from 'react';
import { List, Avatar, Button, Skeleton, Row, Col, Tag } from 'antd';

export default class DoneList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initLoading: true,
            loading: false,
            doneTodoArray: [],
            list: [],
        };
    }

    componentDidMount() {
        this.setState({
            initLoading: false,
            doneTodoArray: this.props.doneTodoArray,
            list: this.props.doneTodoArray
        });
    }

    renderCategory = (todo) => {
        let categoryTagArr = [];

        todo.category.forEach(Item => {
            categoryTagArr.push(<Tag>{Item}</Tag>);
        });
        return categoryTagArr;
    }

    render() {
        // const doneTodoArray = this.state.doneTodoArray;
        const { initLoading, doneTodoArray } = this.state;
        return (
            <Row justify="center">
                <Col span={12}>
                    <List
                        loading={initLoading}
                        itemLayout="horizontal"
                        dataSource={doneTodoArray}
                        renderItem={todo => (
                            <List.Item>
                                <label>{todo.text}</label>
                                {this.renderCategory(todo)}
                            </List.Item>
                        )}>
                    </List>
                </Col>
            </Row>
        )
    }
}