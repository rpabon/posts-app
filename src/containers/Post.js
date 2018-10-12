import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPost } from '../actions';
import { getPostFromState, getPendingFromState } from '../reducers/post';

class Post extends PureComponent {
  componentDidMount() {
    const {
      getPost,
      match: {
        params: { id }
      }
    } = this.props;

    getPost(id);
  }

  render() {
    const {
      post: { title, body }
    } = this.props;

    console.log(process.env)

    return (
      <Fragment>
        <h2>{title}</h2>
        <p>{body}</p>
      </Fragment>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  pending: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired
};

Post.defaultProps = {
  post: { title: '', body: '' },
  pending: false,
  match: { params: { id: 0 } }
};

const mapStateToProps = state => ({
  post: getPostFromState(state),
  pending: getPendingFromState(state)
});

export default connect(
  mapStateToProps,
  { getPost }
)(Post);
