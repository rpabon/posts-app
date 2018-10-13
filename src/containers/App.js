import React, { Fragment } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import PostsList from './PostsList';
import PostSingle from './PostSingle';

export default () => (
  <Router>
    <Fragment>
      <Route path="/" component={PostsList} exact />
      <Route path="/post/:id" component={PostSingle} exact />
    </Fragment>
  </Router>
);
