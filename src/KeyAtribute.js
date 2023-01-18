import React from 'react';
import Posts from './components/Posts';

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
        <Posts kluch={this.state.posts}/>
      </div>
    )
  }
}