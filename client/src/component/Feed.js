import React, { Component } from 'react';

import Post from './Post.js';

import './Feed.css';

class Feed extends Component {
  constructor(props){
    super(props);

    this.test = this.test.bind(this);
  }

  test(e) {
    this.props.refreshFeed(e.target.value);
    // console.log(e.target.value);
    // fetch('/users/sub/aww')
    //   .then((res) => this.props.refreshFeed());
  }

  // <button onClick={this.test}></button>
  // <h3>r/all</h3>

  render() {
    return(
      <div className="Feed">
        <div>
          <select onChange={this.test}>
            <option value="all">r/all</option>
            <option value="unixporn">r/unixporn</option>
            <option value="startpages">r/startpages</option>
          </select>
        </div>
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
