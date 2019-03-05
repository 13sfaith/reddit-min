import React, { Component } from 'react';
import Comment from './Comment.js';

import './CommentView.css';

class CommentView extends Component {
  render(){
    return(
      <div className="CommentView">
        {this.props.cd.map((item, i) => {
          return(<Comment key={item.data.body + i} data={item.data}/>);
        })}
        <div>footer!</div>
      </div>
    );
  }
}
export default CommentView;
