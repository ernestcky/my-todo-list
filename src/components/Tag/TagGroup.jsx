import React, { Component } from 'react';
import { List, Row, Col, Tag } from 'antd';
import TagItem from './TagItem';

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
        console.log(this.state)
        const { initLoading } = this.state;
        return (
            <Row justify="center">
                <Col span={16}>
                    <List
                        loading={initLoading}
                        itemLayout="horizontal"
                        dataSource={this.props.tagArray}
                        renderItem={(tag) => (
                            <TagItem tag={tag} />
                        )}>
                    </List>
                </Col>
            </Row>

        )
    }
}