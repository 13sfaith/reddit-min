import React, { Component } from 'react';

import Post from './Post.js';

import './Feed.css';

class Feed extends Component {


  render() {
    return(
      <div className="Feed">
        <h1>Reddit</h1>
        <h3>r/all</h3>
        {this.props.data.map((item, index) =>
          <Post i={index} key={index}
            sub={item.data.subreddit} title={item.data.title}
            postEvent={this.props.postEvent}/>

        )}
      </div>
    );
  }
}

export default Feed;
