import React, { Component } from 'react';
import { Router, browserHistory, Route, IndexRoute, withRouter } from 'react-router'
import List from './containers/blogPosts/list';
import Create from './containers/blogPosts/create';
import Update from './containers/blogPosts/update';
import NotFoundPage from './components/NotFoundPage';

export default class App extends Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={List}>
            <IndexRoute to="/posts"/>
        </Route>
        <Route path="/posts/create" component={withRouter(Create)}/>
        <Route path="/posts/update/:postId" component={withRouter(Update)}/>
        <Route path="*" component={NotFoundPage}/>
      </Router>
    );
  }
}
