import React, { Component } from 'react';
import './Post.css';

class Post extends Component {
  constructor(props){
    super(props);

    this.postEvent = this.postEvent.bind(this);
  }

  postEvent(e){
    console.log(e);
    this.props.postEvent(this.props.i);
  }

  render(){
    return(
      <div onClick={this.postEvent} className="Post">
        <div className="sub">
          r/{this.props.sub}
        </div>
        <div className="title">
          {this.props.title}
        </div>
      </div>
    );
  }
}
export default Post;
