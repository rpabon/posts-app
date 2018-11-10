import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/**
|--------------------------------------------------
| The components must be deafult exported for
| react-loadable
|--------------------------------------------------
*/

export default class Comments extends PureComponent {
  render() {
    const { comments } = this.props;

    if (!comments.length) {
      return null;
    }

    return comments.map(({ id, name, body, email }) => (
      <div key={id}>
        <p>
          <b>
            {name} <small>{email}</small>
          </b>
        </p>
        <p>{body}</p>
      </div>
    ));
  }
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired
};

Comments.defaultProps = {
  comments: []
};

