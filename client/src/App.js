import React, { Component } from 'react';

import Feed from './component/Feed.js';
import PostView from './component/PostView';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      data : [],
      postData : [],
      commentData : [],
    }

    this.postEvent = this.postEvent.bind(this);
  }

  componentDidMount() {
    fetch('/users')
      .then((res) => res.json())
      .then((myJSON) => this.setState({ data : myJSON.data.children }));
      //.then(res => res.json())
      //.then(users => this.setState({ data : users }));

    //console.log(this.state.data);
  }

  postEvent(i) {
    console.log('Post event! ' + i);
    fetch('/users/post/' + i)
      .then((res) => res.json())
      .then((postJSON) => this.setState({postData : postJSON[0].data.children[0],
        commentData : postJSON[1].data.children,
      }));

    console.log(this.state.postData);
  }

  render() {
    return (
      <div className="App">

        <Feed postEvent={this.postEvent} data={this.state.data}/>
        <PostView pd={this.state.postData} cd={this.state.commentData}/>
      </div>
    );
  }
}

export default App;
