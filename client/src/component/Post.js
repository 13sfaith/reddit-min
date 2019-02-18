import React, { Component } from 'react';
import './Post.css';

class Post extends Component {
  render(){
    return(
      <div className="Post">
        <div id="sub">
          r/{this.props.sub}
        </div>
        <div id="title">
          {this.props.title}
        </div>
      </div>
    );
  }
}
export default Post;
