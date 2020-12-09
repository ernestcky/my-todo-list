import React, { Component } from 'react';

export default class DoneList extends Component {
    render() {
        const doneTodoArray = this.props.doneTodoArray;
        
        return (
            <div>
                <h4>Done List</h4>
                <ul>
                    {doneTodoArray.map(todoText => 
                        <li>{todoText}</li>    
                    )}
                </ul>
            </div>
        )
    }
}