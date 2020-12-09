import { Col, Menu, Row } from "antd";
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import '../css/stylesheet.css';

export default class Navigation extends Component {

    render() {
        const menuStyle = {
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#ff0000'
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
                    </Menu>
                </Col>
            </Row>
        )
    }
}