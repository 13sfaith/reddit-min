import React, { Component } from 'react';

import Post from './Post.js';

import './Feed.css';

class Feed extends Component {
  constructor(props){
    super(props);

    this.test = this.test.bind(this);
  }

  test() {
    this.props.refreshFeed('unixporn');
    // fetch('/users/sub/aww')
    //   .then((res) => this.props.refreshFeed());
  }

  // <button onClick={this.test}></button>

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
