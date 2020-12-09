import React, { Component } from 'react';
import { List, Avatar, Button, Skeleton, Row, Col } from 'antd';

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

    render() {
        // const doneTodoArray = this.state.doneTodoArray;
        const { initLoading, loading, doneTodoArray } = this.state;
        return (
            <Row justify="center">
                <Col span={12}>
                    <List
                        loading={initLoading}
                        itemLayout="horizontal"
                        dataSource={doneTodoArray}
                        renderItem={todoText => (
                            <List.Item>
                                <div>{todoText}</div>
                            </List.Item>
                        )}>
                    </List>
                </Col>
            </Row>
        )
    }
}