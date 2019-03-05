import React, { Component } from 'react';

import CommentView from './CommentView.js';

import './PostView.css'

class PostView extends Component {
  constructor(props){
    super(props);

    this.state = {
      title : "",
      isImg : false,
      isVid : false,
      vidSrc : "",
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
          this.setState({isVid : true,
                         vidSrc : this.props.pd.media.reddit_video.scrubber_media_url,
          });
        }
        else
        {
          this.setState({isVid : false,
                         vidSrc : "",
          });
        }
      }
    }
  }

  render(){


    return(
      <div className="PostView">
        <p className="TitlePV">{this.state.title}</p>
        {this.state.isImg && <img className="ImgPV" alt="" src={this.props.pd.url}/>}
        {this.state.isVid && <embed className="VidSrc" src={this.state.vidSrc}/>}
        <CommentView cd={this.props.cd}/>
      </div>
    );
  }
}
export default PostView;
