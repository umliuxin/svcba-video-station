import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectVideo, fetchVideos } from '../actions';
import { bindActionCreators } from 'redux';

class VideoList extends Component {

  componentDidMount(){
    this.props.fetchVideos();
  }
  renderList() {
    if (!this.props.videos){
      return <div>Loading</div>;
    }
    return this.props.videos.data.map((video) => {
      return (
        <div
          className='video-list-item'
          key={video.id}
          onClick={() => this.props.selectVideo(video)}>
          <div>{video.team_1} vs {video.team_2}</div>
          <div>{video.game_day}</div>
          <div>{video.youtube_id}</div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="">
        {this.renderList()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    videos: state.videos
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( {selectVideo, fetchVideos}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
