import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectVideo, fetchVideos, selectTeam, selectGameday } from '../actions';
import { bindActionCreators } from 'redux';

import { fetchTeamLogo } from '../utility';

class VideoList extends Component {

  componentDidMount(){
    this.props.fetchVideos({indexVideos: true});
  }
  renderItem(video) {
    return (
      <div
        className='c_video-list-item col-sm-3'
        key={video.id}
        onClick={() => {
          this.props.selectVideo(video);
          this.props.fetchVideos({selectedVideo: video})
        }}>
        <div className="item-wrap">
          <div className="image-wrap">
            <div className="team-1-logo">
              <img src={fetchTeamLogo(video.team_1)}/>
            </div>
            <div className="team-2-logo">
              <img src={fetchTeamLogo(video.team_2)}/>
            </div>
          </div>
          <div>{video.team_1} vs {video.team_2}</div>
          <div>{video.game_day}</div>

        </div>
      </div>
    );
  }
  renderList(videos) {
    return videos.map((video) => {
      return this.renderItem(video);
    });
  }

  renderTitle() {
    if (!this.props.videos){
      return '';
    }
    if (this.props.selectedTeam && this.props.selectedGameday){
      return (
        <span>{this.props.selectedTeam.name} Game on {this.props.selectedGameday}</span>
      );
    } else if (this.props.selectedTeam) {
      return (
        <span>All Games from {this.props.selectedTeam.name}</span>
      );
    } else if (this.props.selectedGameday) {
      return (
        <span>All Games on {this.props.selectedGameday}</span>
      );
    } else {
      return ( <span>Recommended</span> );
    }
  }

  renderApplied() {
    if (this.props.selectedTeam && this.props.selectedGameday){
      return (
        <div>
          <div className="applied-item" onClick = {()=>{
              this.props.selectTeam();
              this.props.fetchVideos({selectedGameday: this.props.selectedGameday, selectedTeam: null});
            }}>{this.props.selectedTeam.name}</div>
          <div className="applied-item" onClick = {()=>{
              this.props.selectGameday();
              this.props.fetchVideos({selectedGameday: null, selectedTeam: this.props.selectedTeam});
            }}>{this.props.selectedGameday}</div>
        </div>
      );
    } else if (this.props.selectedTeam) {
      return (
        <div className="applied-item" onClick = {()=>{
            this.props.selectTeam();
            this.props.fetchVideos({selectedGameday: this.props.selectedGameday, selectedTeam: null});
          }}>{this.props.selectedTeam.name}</div>
      );
    } else if (this.props.selectedGameday) {
      return (
        <div className="applied-item" onClick = {()=>{
            this.props.selectGameday();
            this.props.fetchVideos({selectedGameday: null, selectedTeam: this.props.selectedTeam});
          }}>{this.props.selectedGameday}</div>
      );
    } else {
      return '';
    }
  }


  renderRecommend() {
    return (
      <div className="container">
        <h4>Other games from {this.props.videos.team_1_name}</h4>
        <div className="row">
          {this.renderList(this.props.videos.team_1_videos)}
        </div>
        <h4>Other games from {this.props.videos.team_2_name}</h4>
        <div className="row">
          {this.renderList(this.props.videos.team_2_videos)}
        </div>
        <h4>Other games from {this.props.videos.game_day_name}</h4>
        <div className="row">
          {this.renderList(this.props.videos.game_day_videos)}
        </div>
      </div>
    );
  }

  render() {
    if (this.props.videos){
      if(Array.isArray(this.props.videos)) {
        return (
          <div className="c_video-list">
            <div className="container">
              <h2 className="comp-title">{this.renderTitle()}</h2>
              <div className="applied-filter">
                {this.renderApplied()}
              </div>
              <div className="row">
                {this.renderList(this.props.videos)}
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="c_video-list">
            {this.renderRecommend()}
          </div>
        );
      }
    } else {
      return (
        <div className="text-center">
          Loading
        </div>
      )
    }

  }

}


function mapStateToProps(state) {
  return {
    videos: state.videos,
    selectedGameday: state.selectedGameday,
    selectedTeam: state.selectedTeam,
    selectedVideo: state.selectedVideo
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( {selectVideo, fetchVideos, selectTeam, selectGameday}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
