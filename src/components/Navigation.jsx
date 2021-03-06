import { Col, Menu, Row } from "antd";
import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import '../css/stylesheet.css';

export default class Navigation extends Component {

    render() {
        // todo: move to css
        const menuStyle = {
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#dedede'
        }
        return (
            <Row justify="center">
                <Col span={24}>
                    <Menu style={menuStyle} mode="horizontal">
                        <Menu.Item>
                            <NavLink className="link" to="/">go to list page</NavLink>
                        </Menu.Item>
                        <Menu.Item>
                            <NavLink className="link" to="/done">go to done page</NavLink>
                        </Menu.Item>
                        <Menu.Item>
                            <NavLink className="link" to="/tag-edit">go to tag edit portal</NavLink>
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        )
    }
}