import React, { Component } from 'react';

import Feed from './component/Feed.js';
import PostView from './component/PostView';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      data : [],
    }
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
    return (
      <div className="App">

        <Feed/>
        <PostView/>
      </div>
    );
  }
}

export default App;
