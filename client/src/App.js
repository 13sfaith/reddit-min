import React, { Component } from 'react';

import PostCard from './component/PostCard';
import SubSelect from './component/SubSelect';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      data : [],
      postData : [],
      commentData : [],
      hasPost : false,
      height: 30,
    }

    this.postEvent = this.postEvent.bind(this);
    this.refreshFeed = this.refreshFeed.bind(this);
    this.handleKey = this.handleKey.bind(this);
  }

  componentDidMount() {
    fetch('/users')
      .then((res) => res.json())
      .then((myJSON) => this.setState({ data : myJSON.data.children }));
      //.then(res => res.json())
      //.then(users => this.setState({ data : users }));

    this.postEvent(0);
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

  wheel(e){
    var speed = e.deltaY;
    this.setState((pS) =>(
      { height : pS.height - (speed / 10), }
    ));
  }

  handleKey(e){
    console.log('click clack' + e.value);
  }

  // <Feed refreshFeed={this.refreshFeed} postEvent={this.postEvent} data={this.state.data}/>
  // {this.state.hasPost && <PostView pd={this.state.postData} cd={this.state.commentData}/>}

  render() {
    return (
      <div className="App" onWheel={(e) => this.wheel(e)}>
        <SubSelect />
        <PostCard pd={this.state.postData} height={this.state.height + "vh"}/>

      </div>
    );
  }
}

export default App;
