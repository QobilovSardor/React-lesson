import React from 'react';
import Posts from './components/Posts';

export default class KeyAtribute extends React.Component {
  state = {
    posts: [
      { id: 1, name: 'JavaScript' },
      { id: 2, name: 'ReactJS' },
      { id: 3, name: 'VueJS' },
    ]
  }

  removePost = (id) => {
    this.setState({ posts: this.state.posts.filter(post => post.id !== id) })
  }

  render() {
    return (
      <div className='posts'>
        <Posts kluch={this.state.posts} removePost={this.removePost} />
      </div>
    )
  }
}