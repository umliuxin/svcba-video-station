import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectedVideo extends Component {
  render(){
    if (!this.props.video){
      return <div>No Video Selected</div>;
    }
    return (
      <div>
        Youtube ID: {this.props.video.youtube_id}<br/>
        Game Day: {this.props.video.game_day}<br/>
        {this.props.video.team_1} vs {this.props.video.team_2}
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
