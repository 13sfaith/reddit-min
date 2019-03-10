import React, { Component } from 'react';

class Head extends Component {
  render(){
    var date = new Date();

    return(
      <div className="Head">
        <div className="Sub">
          r/{this.props.pd.subreddit}
        </div>
        <div className="Author">
          posted by: u/{this.props.pd.author} {Math.floor(((date.getTime() / 1000) - this.props.pd.created) / 60 / 60)} hours ago
        </div>
        <div className="Score">
          {this.props.pd.score}
        </div>
        <div className="Title">
          {this.props.pd.title}
        </div>
      </div>
    );
  }
}
export default Head;
