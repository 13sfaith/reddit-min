import React, { Component } from 'react';
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
        <h1>Reddit</h1>
        <h3>r/all</h3>
        {this.state.data.map((item, index) =>
          <div key={index}>
            <div>
              r/{item.data.subreddit}
            </div>
            <div>
              {item.data.title}
            </div>
          </div>

        )}
      </div>
    );
  }
}

export default App;
