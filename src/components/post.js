import React, { Component } from 'react'

export class Post extends Component {
  render() {
    return (
        <li>
        {this.props.title}
      </li>
    )
  }
}



export default Post;