import { Col, Row, List, Tag } from "antd";
import React, { Component } from 'react';


export default class TagItem extends Component {
    render() {
        return (
            <List.Item className="todolist">
                <div style={{
                    width: '100%'
                }}>
                    {/* todo: seperate a component */}
                    <Row justify="center">
                        <Col span={10} className="todoMessage">
                            {this.props.tag.content}
                        </Col>
                        <Col span={7} offset={6}>
                            <Tag color={this.props.tag.color}>{this.props.tag.color}</Tag>
                        </Col>
                    </Row>
                </div>
            </List.Item>
        )
    }
}