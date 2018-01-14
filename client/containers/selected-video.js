import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectedVideo extends Component {
  render(){
    if (!this.props.video){
      return <div>No Video Selected</div>;
    }
    return (
      <div>
        Video ID: {this.props.video.video_id}
        <br/>
        {this.props.video.team_home} vs {this.props.video.team_away}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    video: state.selectedVideo
  };
}

export default connect(mapStateToProps)(SelectedVideo)
