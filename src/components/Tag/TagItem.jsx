import { Col, Row, List, Tag, Button, Select } from "antd";
import React, { Component } from 'react';
import { deleteTag, updateTag } from './../../apis/todos';
import { DeleteTwoTone } from '@ant-design/icons';

export default class TagItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: this.props.tag.content,
            color: this.props.tag.color
        }
    }

    deleteTag = (id) => {
        deleteTag(id).then(
            this.props.deleteTag(id)
        )
    }

    handleChangeColor = (value) => {
        this.setState({
            color: value
        });
    }

    handleChangeContent = (event) => {
        this.setState({
            content: event.target.value
        })
    }

    submitChange = (id) => {
        console.log(this.state)
        const tag = {
            tagId: id,
            content: this.state.content,
            color: this.state.color
        }

        updateTag(tag).then(
            this.props.updateTag(tag)
        )
    }

    render() {
        const { Option } = Select;
        const tag = this.props.tag;
        return (
            <List.Item className="todolist">
                <div style={{
                    width: '100%'
                }}>
                    {/* todo: seperate a component */}
                    <Row justify="center">
                        <Col span={10} className="todoMessage">
                            <input
                                value={this.state.content}
                                placeholder="type the text"
                                type="text"
                                onChange={this.handleChangeContent}
                            />
                        </Col>
                        <Col span={7} offset={5}>

                            <Select defaultValue={this.props.tag.color} style={{ width: 120 }} onChange={this.handleChangeColor}>
                                <Option value="magenta"><Tag color="magenta">magenta</Tag></Option>
                                <Option value="red"><Tag color="red">red</Tag></Option>
                                <Option value="volcano"><Tag color="volcano">volcano</Tag></Option>
                                <Option value="orange"><Tag color="orange">orange</Tag></Option>
                                <Option value="gold"><Tag color="gold">gold</Tag></Option>
                                <Option value="blue"><Tag color="blue">blue</Tag></Option>
                                <Option value="lime"><Tag color="lime">lime</Tag></Option>
                                <Option value="green"><Tag color="green">green</Tag></Option>
                                <Option value="cyan"><Tag color="cyan">cyan</Tag></Option>
                                <Option value="geekblue"><Tag color="geekblue">geekblue</Tag></Option>
                                <Option value="purple"><Tag color="purple">purple</Tag></Option>
                            </Select>
                            {/* <Tag color={this.props.tag.color}>{this.props.tag.color}</Tag> */}
                        </Col>
                        <Col span={1}>
                            <DeleteTwoTone className="button" onClick={() => this.deleteTag(this.props.tag.tagId)} />
                        </Col>
                        <Col span={1}>
                            <Button onClick={() => this.submitChange(tag.tagId)}>Submit</Button>
                        </Col>


                    </Row>
                </div>
            </List.Item>
        )
    }
}