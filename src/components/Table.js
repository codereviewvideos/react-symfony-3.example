import React, { Component } from 'react';
import { Link } from 'react-router';
import Paginator from './pagination';

export default class Table extends Component {

    constructor(props) {
        super(props);

        this.state = {
            blogPosts: props.blogPosts,
            totalPages: props.totalPages,
            currentPageNumber: props.currentPageNumber,
            itemsPerPage: props.itemsPerPage,
            reverse: false,
            titleFilter: '',
            limit: props.itemsPerPage
        };
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            blogPosts: newProps.blogPosts,
            totalPages: newProps.totalPages,
            currentPageNumber: newProps.currentPageNumber,
            itemsPerPage: newProps.itemsPerPage
        });
    }

    deleteHandler(i) {
        this.props.onDelete(this.props.blogPosts[i].id);
    };

    pageChangeHandler(i) {
        this.props.onPaginate(i);
    };

    sortingHandler(sortBy) {
        this.setState({
            sortBy: sortBy,
            reverse: !this.state.reverse
        });
        this.props.onSort(sortBy, this.state.reverse ? 'desc' : 'asc');
    }

    titleFilterHandler(e) {
        this.setState({
            titleFilter: e.target.value
        });
        this.props.onFilter(e.target.value || '');
    }

    limitHandler(e) {
        this.setState({
            limit: e.target.value
        });
        this.props.onLimit(e.target.value, this.state.itemsPerPage);
    }

    render() {
        return (
            <div>
                <label htmlFor="limiter">Limit</label>
                <input type="text"
                       id="table_limiter"
                       value={this.state.limit}
                       onChange={this.limitHandler.bind(this)}
                       className="form-control"/>

                <table className="table table-hover table-responsive">
                    <thead>
                    <tr>
                        <th onClick={() => this.sortingHandler('bp.id')}>id</th>
                        <th>
                            <span onClick={() => this.sortingHandler('bp.title')}>Title</span>
                            <input type="text"
                                   id="table_blog_title_filter"
                                   value={this.state.titleFilter}
                                   onChange={this.titleFilterHandler.bind(this)}
                                   className="form-control"/>
                        </th>
                        <th>Options</th>
                    </tr>
                    </thead>
                    <tbody>

                    {this.state.blogPosts && this.state.blogPosts.map((post, i) => {

                        return (
                            <tr key={post.id}>
                                <td>{ post.id }</td>
                                <td>{ post.title }</td>
                                <td>
                                    <Link to={`/posts/update/${post.id}`} className="btn btn-default btn-sm">Edit</Link>
                                    <btn onClick={() => this.deleteHandler(i)} className="btn btn-danger btn-sm">Delete</btn>
                                </td>
                            </tr>
                        );

                    })}

                    </tbody>
                </table>

                <Paginator totalItems={this.state.totalPages || 1}
                           currentPageNumber={this.state.currentPageNumber || 1}
                           pageChangeHandler={this.pageChangeHandler.bind(this)}
                ></Paginator>

                <hr/>

                <Link to="/posts/create" className="btn btn-lg btn-success">Create</Link>
            </div>
        );
    };

}