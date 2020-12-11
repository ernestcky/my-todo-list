import React, { Component } from 'react';
import { Button, Select } from 'antd';
import { addNewTag } from "../../apis/todos";

export default class TagGenerator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tagContent: "",
            tagColor: "blue"
        }
    }

    onChangeContent = (event) => {
        this.setState({
            tagContent: event.target.value
        });
    }

    submitTag = () => {
        addNewTag(this.state.tagContent, this.state.tagColor)
            .then(response => this.props.submitTag(response.data));

        this.setState({
            tagContent: "",
            tagColor: ""
        })
    }

    handleChange = (value) => {
        this.setState({
            tagColor: value
        })
    }

    render() {
        const { Option } = Select;
        return (
            <div style={{
                margin: "10px"
            }}>
                <input
                    value={this.state.tagContent}
                    placeholder="type the text"
                    type="text"
                    onChange={this.onChangeContent}
                />
                <Select defaultValue="blue" style={{ width: 120 }} onChange={this.handleChange}>
                    <Option value="magenta">magenta</Option>
                    <Option value="red">red</Option>
                    <Option value="volcano">volcano</Option>
                    <Option value="orange">orange</Option>
                    <Option value="gold">gold</Option>
                    <Option value="lime">lime</Option>
                    <Option value="green">green</Option>
                    <Option value="cyan">cyan</Option>
                    <Option value="geekblue">geekblue</Option>
                    <Option value="purple">purple</Option>
                </Select>
                <Button type="primary" onClick={this.submitTag}>Add</Button>
                <br />
            </div>
        )
    }
}