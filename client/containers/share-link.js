import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShareLink extends Component {

  constructor(props){
    super(props);
    this.copyToClipboard = this.copyToClipboard.bind(this);
  }
  render(){
    if (!this.props.showShare){
      return '';
    }
    if (!this.props.video){
      return <div>No Link</div>;
    }
    const shareUrl = `${window.location.href}?v=${this.props.video.youtube_id}`;
    return (
      <div>
        <input className="share-link" id="js-share-link" value={shareUrl} readOnly/>
        <button onClick={() => {this.copyToClipboard()}}>Copy</button>
      </div>
    );
  }

  copyToClipboard(){
    var copyText = document.getElementById("js-share-link");
    /* Select the text field */
    copyText.select();
    /* Copy the text inside the text field */
    document.execCommand("Copy");
    alert("Copied to Copyboard");
  }

}

function mapStateToProps(state) {
  return {
    video: state.selectedVideo,
    showShare: state.showShare
  };
}


export default connect(mapStateToProps)(ShareLink)
