import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Form from '../../components/form';
import { createBlogPost } from '../../actions/blogPostActions';

export default class Create extends Component {

    handleSubmit(data) {
        createBlogPost(data);
        this.props.router.push('/').bind(this);
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit.bind(this)}></Form>
            </div>
        );
    }
}
