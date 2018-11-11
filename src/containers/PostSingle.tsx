import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPost, getComments } from '../actions';
import { getPostFromState, getPendingFromState } from '../reducers/post-single';
import {
  getCommentsFromState,
  getPendingFromState as getCommentsPending
} from '../reducers/comments';
import Loadable from 'react-loadable';
import Loading from '../components/Loading';

const LoadableComments = Loadable({
  loader: () => import('../components/Comments'),
  loading: Loading
});

class Post extends PureComponent {
  static serverFetch(url: string) {
    const id = Number(url.replace('/post/', ''));
    return [getPost(id), getComments(id)];
  }

  componentDidMount() {
    const {
      post,
      comments,
      match: {
        params: { id }
      }
    } = this.props;

    if (!post.title) {
      getPost(id);
    }

    if (comments.length === 0) {
      getComments(id);
    }
  }

  render() {
    const {
      post: { title, body },
      comments
    } = this.props;

    return (
      <Fragment>
        <h2>{title}</h2>
        <p>{body}</p>

        <section>
          <h4>Comments</h4>
          <LoadableComments comments={comments} />
        </section>
      </Fragment>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  pending: PropTypes.bool.isRequired,
  comments: PropTypes.array.isRequired,
  commentsPending: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired
};

Post.defaultProps = {
  post: { title: '', body: '' },
  pending: false,
  comments: [],
  commentsPending: false,
  match: { params: { id: 0 } }
};

const mapStateToProps = state => ({
  post: getPostFromState(state),
  pending: getPendingFromState(state),
  comments: getCommentsFromState(state),
  commentsPending: getCommentsPending(state)
});

export default connect(
  mapStateToProps,
  { getPost, getComments }
)(Post);
