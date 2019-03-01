import React, { Component } from 'react';

import './PostView.css'

class PostView extends Component {
  constructor(props){
    super(props);

    this.state = {
      title : "",
    };

  }


  componentDidMount() {

  }

  componentDidUpdate(prevProps){
    if (this.props.cd.length > 0){
      if (prevProps.pd.length === 0 || this.props.pd.data.title !== prevProps.pd.data.title){
        this.setState({title : this.props.pd.data.title});
      }
    }
  }

  render(){


    return(
      <div className="PostView">
        <p className="TitlePV">{this.state.title}</p>
      </div>
    );
  }
}
export default PostView;
