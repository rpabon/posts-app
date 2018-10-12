import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../actions';
import { getPendingFromState, getPostsFromState } from '../reducers/posts-list';

class PostsList extends PureComponent {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return this.props.posts.map(({ id, title, body }) => (
      <div key={id}>
        <h3>{title}</h3>
        <p>{body}</p>
        <hr />
      </div>
    ));
  }
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
  pending: PropTypes.bool.isRequired
};

PostsList.defaultProps = {
  posts: [],
  pending: false
};

const mapStateToProps = state => ({
  posts: getPostsFromState(state),
  pending: getPendingFromState(state)
});

export default connect(
  mapStateToProps,
  { getPosts }
)(PostsList);
