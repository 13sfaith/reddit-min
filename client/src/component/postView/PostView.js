import React, { Component } from 'react';

import CommentView from './CommentView.js';
import PostHeader from './PostHeader.js';

import './PostView.css';

class PostView extends Component {
  constructor(props){
    super(props);

    this.state = {
      headData : "",
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
        var data = {
          title : this.props.pd.title,
          sub : this.props.pd.subreddit,
          auth : this.props.pd.author,
          score : this.props.pd.score,
        };
        this.setState({headData : data});
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
      <div className="PostContain">
        <div className="PostView">
          <PostHeader data={this.state.headData} />
          {this.state.isImg && <img className="ImgPV" alt="" src={this.props.pd.url}/>}
          {this.state.isVid && <embed className="VidSrc" src={this.state.vidSrc}/>}
          <p className="postCom">{this.props.pd.selftext}</p>
          <CommentView cd={this.props.cd}/>
        </div>
      </div>
    );
  }
}
export default PostView;
