import React, { Component } from 'react';

import './PostView.css'

class PostView extends Component {
  constructor(props){
    super(props);

    this.state = {
      title : "",
      isImg : false,
      isVid : false,
    };

  }


  componentDidMount() {

  }

  componentDidUpdate(prevProps){
    if (this.props.cd.length > 0){
      if (prevProps.pd.length === 0 || this.props.pd.title !== prevProps.pd.title){
        this.setState({title : this.props.pd.title});
        if (this.props.pd.post_hint === "image")
        {
          this.setState({isImg : true});
        }
        else
        {
          this.setState({isImg : false});
        }

        if (this.props.pd.post_hint === "hosted:video"){
          this.setState({isVid : true});
        }
        else
        {
          this.setState({isVid : false});
        }
      }
    }
  }

  // add the boolean and link to this!
  // <embed src="https://v.redd.it/uwgu9egtxfj21/DASH_240"/>

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
