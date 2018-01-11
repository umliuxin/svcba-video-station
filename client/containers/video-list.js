import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectVideo } from '../actions';
import { bindActionCreators } from 'redux';

class VideoList extends Component {

  renderList() {
    return this.props.videos.map((video) => {
      return (
        <li
          className='video-list-item'
          key={video.video_id}
          onClick={() => this.props.selectVideo(video)}> 
          {video.team_home} vs {video.team_away}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    videos: state.videos
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( {selectVideo}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
