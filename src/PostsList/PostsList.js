import React, { PureComponent } from 'react';
import axios from 'axios';

export class PostsList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  async getPosts() {
    const { data: posts } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );

    this.setState({ posts });
  }
  componentDidMount() {
    this.getPosts();
  }

  render() {
    return this.state.posts.map(({ id, title, body }) => (
      <div key={id}>
        <h3>{title}</h3>
        <p>{body}</p>
        <hr />
      </div>
    ));
  }
}
