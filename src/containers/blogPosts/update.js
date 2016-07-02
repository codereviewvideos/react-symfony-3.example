import React, { Component } from 'react';
import Form from '../../components/form';
import { fetchBlogPost, updateBlogPost } from '../../actions/blogPostActions';

const Update = React.createClass ({

    getInitialState() {
        return {
            blogPost: {}
        };
    },

    componentDidMount() {
        fetchBlogPost(this.props.params.postId)
            .then((data) => {
                this.setState(state => {
                    state.blogPost = data;
                    return state;
                });
            })
            .catch((err) => {
                console.error('err', err);
            });
    },

    handleSubmit(data) {
        updateBlogPost(this.state.blogPost.id, data);
        this.props.router.push('/');
    },

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit.bind(this)}
                      title={this.state.blogPost.title}
                      body={this.state.blogPost.body}></Form>
            </div>
        );
    }
});

export default Update;
