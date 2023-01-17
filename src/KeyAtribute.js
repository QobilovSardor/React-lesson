import React from 'react'

export default class KeyAtribute extends React.Component {
  state = {
    posts: [
      { id: 1, name: 'JavaScript' },
      { id: 2, name: 'ReactJS' },
      { id: 1, name: 'VueJS' },
    ]
  }

  render() {
    return(
      <div>
        {this.state.posts.map((post, idx) => (
          <p key={idx}>{post.name}</p>
        ))}
      </div>
    )
  }
}