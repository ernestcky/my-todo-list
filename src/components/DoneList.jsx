import React, { Component } from 'react';
import { List, Row, Col, Tag } from 'antd';

export default class DoneList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initLoading: true,
            loading: false,
            doneTodoArray: [],
        };
    }

    componentDidMount() {
        this.setState({
            initLoading: false,
            doneTodoArray: this.props.doneTodoArray,
        });
    }

    renderCategory = (todo) => {
        let categoryTagArr = [];
        todo.category.forEach(item => {
            categoryTagArr.push(<Tag color={item.color}>{item.content}</Tag>);
        });
        return categoryTagArr;
    }

    render() {
        // const doneTodoArray = this.state.doneTodoArray;
        const { initLoading, doneTodoArray } = this.state;
        return (
            <Row justify="center">
                <Col span={16}>
                    <List
                        loading={initLoading}
                        itemLayout="horizontal"
                        dataSource={doneTodoArray}
                        renderItem={todo => (
                            <List.Item className="todolist">
                                <div style={{
                                    width: '100%'
                                }}> 
                                {/* todo: seperate a component */}
                                    <Row justify="center">
                                        <Col span={10} className="todoMessage">
                                            {todo.text}
                                        </Col>
                                        <Col span={7} offset={6}>
                                            {this.renderCategory(todo)}
                                        </Col>
                                    </Row>
                                </div>
                            </List.Item>
                        )}>
                    </List>
                </Col>
            </Row>
        )
    }
}