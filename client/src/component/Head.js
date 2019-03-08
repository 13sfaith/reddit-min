import React, { Component } from 'react';

class Head extends Component {
  render(){
    return(
      <div className="Head">
        <div className="Sub">
          r/{this.props.pd.subreddit}
        </div>
        <div className="Author">
          posted by: u/{this.props.pd.author}
        </div>
        <div className="Title">
          {this.props.pd.title}
        </div>
      </div>
    );
  }
}
export default Head;
