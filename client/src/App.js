import React, { Component } from 'react';

import PostCard from './component/PostCard';
import SubSelect from './component/SubSelect';
import Arrow from './component/Arrow';

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
      i : 0,
    }

    this.postEvent = this.postEvent.bind(this);
    this.refreshFeed = this.refreshFeed.bind(this);
    this.handleKey = this.handleKey.bind(this);
  }

  componentDidMount() {
    fetch('/users')
      .then((res) => res.json())
      .then((myJSON) => this.setState({ data : myJSON.data.children }))
      .then(this.postEvent(0));
      //.then(res => res.json())
      //.then(users => this.setState({ data : users }));

    // this.postEvent(this.state.i);
    //console.log(this.state.data);
  }

  refreshFeed(sub) {
    console.log('refreshing the feed');
    fetch('/users/sub/' + sub)
      .then((res) => res.json())
      .then((myJSON) => this.setState({ data : myJSON.data.children }));

  }

  postEvent(mod) {
    var logI = this.state.i + mod;

    this.setState({i : logI});

    console.log('logI is: ' + logI);
    console.log('new i is: ' + this.state.i);

    fetch('/users/post/' + this.state.i)
      .then((res) => res.json())
      .then((postJSON) => this.setState({postData : postJSON[0].data.children[0].data,
        commentData : postJSON[1].data.children,
        hasPost : true,
      }))
      .catch((err) => console.log(err));
  }
  // onWheel={(e) => this.wheel(e)}
  wheel(e){
    if (e !== undefined){
      var speed = e.deltaY;
      this.setState((pS) =>(
        { height : pS.height - (speed / 10), }
      ));
    }
  }

  handleKey(k){
    console.log('wowsers');
  }

  // <Feed refreshFeed={this.refreshFeed} postEvent={this.postEvent} data={this.state.data}/>
  // {this.state.hasPost && <PostView pd={this.state.postData} cd={this.state.commentData}/>}

  render() {
    return (
      <div className="App" onWheel={(e) => this.wheel(e)}>
        <SubSelect />
        <PostCard pd={this.state.postData} height={this.state.height + "vh"}/>
        <Arrow pe={this.postEvent}/>
      </div>
    );
  }
}

export default App;
