import React, { Component } from 'react';

import './Arrow.css';

class Arrow extends Component {
  constructor(props){
    super(props);

    this.forward = this.forward.bind(this);
    this.backward = this.backward.bind(this);
  }


  forward(){
    this.props.pe(1);
  }

  backward(){
    this.props.pe(-1);
  }

  render(){
    return(
      <div className="Arrow">

        <div className="Left" onClick={this.backward}>
          <svg width="36" height="72" viewBox="0 0 36 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 36L36 72V56.5L15.5 36L36 15.5L36 0L0 36Z" fill="white"/>
          </svg>
        </div>

        <div className="Right" onClick={this.forward}>
          <svg width="36" height="72" viewBox="0 0 36 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36 36L0 0V15.5L20.5 36L0 56.5V72L36 36Z" fill="white"/>
          </svg>
        </div>

      </div>
    );
  }
}
export default Arrow;
