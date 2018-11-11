import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions';
import { getPendingFromState, getPostsFromState } from '../reducers/posts-list';
import { Link } from 'react-router-dom';
import { PostsListState, PostsListProps } from '../interfaces';

class PostsList extends PureComponent<PostsListProps> {
  static serverFetch() {
    return [getPosts()];
  }

  componentDidMount() {
    const { posts } = this.props;

    // if (posts.length === 0) {
    //   getPosts();
    // }
  }

  render() {
    return this.props.posts.map(({ id, title, body }) => (
      <article key={id}>
        <Link to={`/post/${id}`}>
          <h3>{title}</h3>
        </Link>
        <p>{body}</p>
        <hr />
      </article>
    ));
  }
}

const mapStateToProps = (state: PostsListState) => ({
  posts: getPostsFromState(state),
  pending: getPendingFromState(state),
});

export default connect(
  mapStateToProps,
  { getPosts }
)(PostsList);
