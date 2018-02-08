import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { showShareLink } from '../actions';


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
    const shareUrl = `${window.location.origin}?v=${this.props.video.youtube_id}`;
    return (
      <div className="c_share-link">
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
    this.props.showShareLink(false);
    alert("Copied to Copyboard");
  }

}

function mapStateToProps(state) {
  return {
    video: state.selectedVideo,
    showShare: state.showShare
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({showShareLink}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(ShareLink)
