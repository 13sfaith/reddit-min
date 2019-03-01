import React, { Component } from 'react';

import './PostView.css'

class PostView extends Component {
  constructor(props){
    super(props);

    this.state = {
      title : "",
      isImg : false,
    };

  }


  componentDidMount() {

  }

  componentDidUpdate(prevProps){
    if (this.props.cd.length > 0){
      if (prevProps.pd.length === 0 || this.props.pd.title !== prevProps.pd.title){
        this.setState({title : this.props.pd.title});
        if (this.props.pd.post_hint === "image"){
          this.setState({isImg : true});
        } else {
          this.setState({isImg : false});
        }
      }
    }
  }

  render(){


    return(
      <div className="PostView">
        <p className="TitlePV">{this.state.title}</p>
        {this.state.isImg && <img className="ImgPV" src={this.props.pd.url}/>}

      </div>
    );
  }
}
export default PostView;
