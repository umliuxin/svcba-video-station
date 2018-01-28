import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVideo } from '../actions';
import { YOUTUBE_BASE_URL } from '../constants/constants';

class SelectedVideo extends Component {
  componentDidMount(){
    if (window.location.search && window.location.search.includes('?v=')){
      let vid = window.location.search.slice(3);
      this.props.fetchVideo(vid);
    }
  }
  render(){
    if (!this.props.video){
      return <div>No Video Selected</div>;
    }
    return (
      <div className="c_video-detial">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={`${YOUTUBE_BASE_URL}${this.props.video.youtube_id}`}></iframe>
        </div>
        <div>
          Game Day: {this.props.video.game_day}<br/>
          {this.props.video.team_1} vs {this.props.video.team_2}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    video: state.selectedVideo
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchVideo}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedVideo)
