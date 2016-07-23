import React, { Component } from 'react';
import { fetchBlogPosts, deleteBlogPost } from '../actions/blogPostActions';
import Table from '../components/table';

export default class List extends Component {

    constructor(props) {
        super(props);

        this.state = {
            blogPosts: [],
            currentPageNumber: 1,
            numItemsPerPage: 10,
            totalItems: 1,
            limit: 10,
            filterBy: '',
            sortBy: '',
            direction: 'asc'
        };
    }

    getBlogPosts(page, limit, filter = '', sort = '', direction = '') {
        page = page || this.state.currentPageNumber;
        limit = limit || this.state.limit;
        fetchBlogPosts(page, limit, filter, sort, direction)
            .then(data => {
                console.log('blog posts', data);
                this.setState({
                    blogPosts: data.items,
                    currentPageNumber: data.currentPageNumber,
                    numItemsPerPage: data.numItemsPerPage,
                    totalItems: data.totalCount
                });
            });
    }

    componentDidMount() {
        this.getBlogPosts();
    }

    onDelete(id) {
        deleteBlogPost(id)
            .then(data => {
                let blogPosts = this.state.blogPosts.filter(post => {
                    return id !== post.id;
                });

                this.setState(state => {
                    state.blogPosts = blogPosts;
                    return state;
                });

            }).catch(err => {
                console.error('error', err);
            });
    }

    onPaginate(i) {
        this.setState({currentPageNumber: i});
        this.getBlogPosts(i);
    }

    onSort(sortBy, direction) {
        this.setState({
            sortBy,
            direction
        });

        this.getBlogPosts(this.state.currentPageNumber, this.state.limit, this.state.filterBy, sortBy, direction);
    }

    onFilter(filterBy) {
        this.setState({ filterBy: filterBy });
        this.getBlogPosts(this.state.currentPageNumber, this.state.limit, filterBy);
    }

    onLimit(limit) {
        this.setState({ limit: limit });
        this.getBlogPosts(this.state.currentPageNumber, limit);
    }

    render() {
        let totalPages = Math.ceil(this.state.totalItems / this.state.numItemsPerPage);
        return (
            <div>
                <Table blogPosts={this.state.blogPosts}
                       onDelete={this.onDelete.bind(this)}
                       onPaginate={this.onPaginate.bind(this)}
                       onSort={this.onSort.bind(this)}
                       onFilter={this.onFilter.bind(this)}
                       onLimit={this.onLimit.bind(this)}
                       currentPageNumber={this.state.currentPageNumber}
                       totalPages={totalPages}
                ></Table>
            </div>
        );
    }

}
