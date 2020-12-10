import React, { Component } from 'react';
import { List, Row, Col, Tag } from 'antd';

export default class TagGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initLoading: true,
            tagArray: [],
        };
    }



    componentDidMount() {
        this.setState({
            initLoading: false,
            tagArray: this.props.tagArray,
        });
    }

    render() {
        const { initLoading, tagArray } = this.state;
        return (
            <Row justify="center">
                <Col span={16}>
                    <List
                        loading={initLoading}
                        itemLayout="horizontal"
                        dataSource={tagArray}
                        renderItem={todo => (
                            <List.Item className="todolist">
                                <div style={{
                                    width: '100%'
                                }}>
                                    {/* todo: seperate a component */}
                                    <Row justify="center">
                                        <Col span={10} className="todoMessage">
                                            {todo.content}
                                        </Col>
                                        <Col span={7} offset={6}>
                                            {todo.color}
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