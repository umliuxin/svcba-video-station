import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShareLink extends Component {

  render(){
    if (!this.props.showShare){
      return '';
    }
    if (!this.props.video){
      return <div>No Link</div>;
    }
    return (
      <div className="share-link">
        {window.location.href}?v={this.props.video.youtube_id}
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    video: state.selectedVideo,
    showShare: state.showShare
  };
}


export default connect(mapStateToProps)(ShareLink)
