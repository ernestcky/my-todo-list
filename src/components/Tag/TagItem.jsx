import { Col, Row, List, Tag, Button } from "antd";
import React, { Component } from 'react';
import { deleteTag } from './../../apis/todos';
import { DeleteTwoTone } from '@ant-design/icons';

export default class TagItem extends Component {
    deleteTag = (id) => {
        deleteTag(id).then(
            this.props.deleteTag(id)
        )
    }

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
                        <Col span={1}>
                            <DeleteTwoTone className="button" onClick={() => this.deleteTag(this.props.tag.tagId)} />
                        </Col>

                    </Row>
                </div>
            </List.Item>
        )
    }
}