import React, { Component } from 'react';

import Feed from './component/Feed.js';
import PostView from './component/postView/PostView.js';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      data : [],
      postData : [],
      commentData : [],
      hasPost : false,
    }

    this.postEvent = this.postEvent.bind(this);
    this.refreshFeed = this.refreshFeed.bind(this);
  }

  componentDidMount() {
    fetch('/users')
      .then((res) => res.json())
      .then((myJSON) => this.setState({ data : myJSON.data.children }));
      //.then(res => res.json())
      //.then(users => this.setState({ data : users }));

    //console.log(this.state.data);
  }

  refreshFeed(sub) {
    console.log('refreshing the feed');
    fetch('/users/sub/' + sub)
      .then((res) => res.json())
      .then((myJSON) => this.setState({ data : myJSON.data.children }));

  }

  postEvent(i) {
    fetch('/users/post/' + i)
      .then((res) => res.json())
      .then((postJSON) => this.setState({postData : postJSON[0].data.children[0].data,
        commentData : postJSON[1].data.children,
        hasPost : true,
      }));
  }

  render() {
    return (
      <div className="App">

        <Feed refreshFeed={this.refreshFeed} postEvent={this.postEvent} data={this.state.data}/>
        {this.state.hasPost && <PostView pd={this.state.postData} cd={this.state.commentData}/>}
      </div>
    );
  }
}

export default App;
