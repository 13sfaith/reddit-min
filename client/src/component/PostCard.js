import React, { Component } from 'react';

import Head from './Head.js';
import Media from './Media.js';

import './PostCard.css';

class PostCard extends Component {
  constructor(props){
    super(props);

    this.handleKey = this.handleKey.bind(this);
  }

  handleKey(e){
    console.log('thank god');
  }

  render(){
    let styles = {
      marginTop: this.props.height,
    };
    return(
      <div style={styles} className="PostCard">
        <Head pd={this.props.pd}/>
        <Media pd={this.props.pd}/>
      </div>
    );
  }
}
export default PostCard;
