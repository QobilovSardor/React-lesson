import React from "react";

export default class KeyAtribute extends React.Component {
  state = {
    posts: [
      { id: 1, name: 'JavaScript' },
      { id: 1, name: 'ReactJS' },
      { id: 1, name: 'VueJS' },
    ]
  }

  render() {
    return(
      <div>
        {this.state.posts.map((post, index) => (
          <p key={index}>{post.name}</p>
        ))}
      </div>
    )
  }
}