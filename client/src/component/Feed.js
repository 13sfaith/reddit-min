import React, { Component } from 'react';

import Post from './Post.js';

import './Feed.css';

class Feed extends Component {
  constructor(props){
    super(props);

    this.state = {
      data : [],
    };

    this.testPost = this.testPost.bind(this);
  }

  componentDidMount() {
    fetch('/users')
      .then((res) => res.json())
      .then((myJSON) => this.setState({ data : myJSON.data.children }));


      //.then(res => res.json())
      //.then(users => this.setState({ data : users }));
    // console.log(this.state.data.map(()));
  }

  testPost(){
    fetch('/users/post/1')
      .then((res) => console.log(res));
  }


  render() {
    return(
      <div className="Feed">
        <h1>Reddit</h1>
        <h3>r/all</h3>
        <button onClick={this.testPost}></button>
        {this.state.data.map((item, index) =>
          <Post key={index} sub={item.data.subreddit} title={item.data.title}/>

        )}
      </div>
    );
  }
}

export default Feed;
