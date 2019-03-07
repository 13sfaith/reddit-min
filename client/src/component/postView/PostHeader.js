import React, { Component } from 'react';

import './PostHeader.css';

class PostHeader extends Component{
  render() {
    return(
      <div className="PostHeader">
        <p className="PostSub">r/{this.props.data.sub}</p>
        <p className="PostAuthor">Posted by u/{this.props.data.auth}</p>
        <p className="PostScore">{this.props.data.score}</p>
        <h1 className="PostTitle">{this.props.data.title}</h1>
      </div>
    );
  }
}
export default PostHeader;
