import { Menu } from "antd";
import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link to="/">go to list page</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/done">go to done page</Link>
                </Menu.Item>
            </Menu>
        )
    }
}