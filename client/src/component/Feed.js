import React, { Component } from 'react';

import Post from './Post.js';

class Feed extends Component {
  constructor(props){
    super(props);

    this.state = {
      data : [],
    };
  }

  componentDidMount() {
    fetch('/users')
      .then((res) => res.json())
      .then((myJSON) => this.setState({ data : myJSON.data.children }));
      //.then(res => res.json())
      //.then(users => this.setState({ data : users }));

    //console.log(this.state.data);
  }


  render() {
    return(
      <div>
        {this.state.data.map((item, index) =>
          <Post key={index} sub={item.data.subreddit} title={item.data.title}/>

        )}
      </div>
    );
  }
}

export default Feed;
