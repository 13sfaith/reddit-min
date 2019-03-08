import React, { Component } from 'react';

import Head from './Head.js';

import './PostCard.css';

class PostCard extends Component {


  render(){
    let styles = {
      marginTop: this.props.height,
    };
    return(
      <div style={styles} className="PostCard">
        <Head pd={this.props.pd}/>
      </div>
    );
  }
}
export default PostCard;
