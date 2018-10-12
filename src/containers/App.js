import React, { Fragment } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import PostsList from './PostsList';
import Post from './Post';

export default () => (
  <Router>
    <Fragment>
      <Route path="/" component={PostsList} exact />
      <Route path="/post/:id" component={Post} exact />
    </Fragment>
  </Router>
);
