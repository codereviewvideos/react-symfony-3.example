import React, { Component } from 'react';

const Form = React.createClass({

    getInitialState() {
        return {
            title: this.props.title || 'my title',
            body: this.props.body || 'some body'
        }
    },

    componentWillReceiveProps(newProps) {
        console.log('got new props', newProps);
        this.setState(newProps);
    },

    handleTitleChange(e) {
        console.log('e handle title change', e);
        this.setState({
            title: e.target.value
        });
    },

    handleBodyChange(e) {
        this.setState({
            body: e.target.value
        });
    },

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state);
    },

    render() {

        console.log('form rendered', this.props);
        console.log('form rendered - state', this.state);

        return(
            <form name="blog_post" className="form-horizontal" onSubmit={this.handleSubmit}>
                <div id="blog_post">
                    <div className="form-group">
                        <label className="col-sm-2 control-label required" htmlFor="blog_post_title">Title</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   id="blog_post_title"
                                   value={this.state.title}
                                   onChange={this.handleTitleChange}
                                   required="required"
                                   className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label required" htmlFor="blog_post_body">Body</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   id="blog_post_body"
                                   value={this.state.body}
                                   onChange={this.handleBodyChange}
                                   required="required"
                                   className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-10">
                            <button type="submit"
                                    id="blog_post_submit"
                                    className="btn-default btn">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }

});

export default Form;