import React, { Component } from 'react';
import { getTagList } from './../../apis/todos';
import TagGroupContainer from './../../containers/Tag/TagGroupContainer';
import TodoGeneratorContainer from './../../containers/TodoGeneratorContainer';
import TagGeneratorContainer from './../../containers/Tag/TagGeneratorContainer';

export default class TagEditPortal extends Component {
    componentDidMount() {
        getTagList().then(response => {
            this.props.initTagArray(response.data)
        })
    }

    render() {
        return (
            <div>
                <TagGroupContainer tagArray={this.props.tagArray} />
                <TagGeneratorContainer />
            </div>
            
        )
    }
}