import React, { Component } from 'react';
import { Pagination } from 'react-bootstrap';

const Paginator = React.createClass({

    getInitialState() {
        return {
            currentPageNumber: 1,
            totalItems: 1
        }
    },

    componentWillReceiveProps(newProps) {
        this.setState({
            currentPageNumber: newProps.currentPageNumber,
            totalItems: newProps.totalItems
        });
    },

    handleSelect(eventKey) {
        this.props.pageChangeHandler(eventKey);
    },

    render() {
        return (
            <Pagination
                bsSize="medium"
                items={this.state.totalItems}
                activePage={this.state.currentPageNumber}
                onSelect={this.handleSelect} />
        );
    }
});

export default Paginator;