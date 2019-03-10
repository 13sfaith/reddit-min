import React, { Component } from 'react';

class Media extends Component{
  render(){
    if (this.props.pd.post_hint === "image"){
      return(<img src={this.props.pd.url}/>);
    }

    if (this.props.pd.post_hint === "hosted:video"){
      return(<video src={this.props.pd.media.reddit_video.fallback_url}/>);
    }

    if (this.props.pd.post_hint === "rich:video"){
      return(<div className="Media">
          {this.props.pd.secure_media.html}
        </div>
      );
    }
    return(
      <div className="Media">

      </div>
    );

  }
}
export default Media;
