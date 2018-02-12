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
    let shareUrl;
    if (this.props.video){
      shareUrl = `${window.location.origin}?v=${this.props.video.youtube_id}`;
    } else if (this.props.team){
      shareUrl = `${window.location.origin}?t=${this.props.team.name}`;
    } else if (this.props.day){
      shareUrl = `${window.location.origin}?d=${this.props.day}`;
    } else{
      return <div>No Link</div>;
    }
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
    team: state.selectedTeam,
    day: state.selectedGameday,
    showShare: state.showShare
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({showShareLink}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(ShareLink)
