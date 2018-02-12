import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectVideo, fetchVideos, selectTeam, selectGameday, showShareLink } from '../actions';
import { bindActionCreators } from 'redux';

import { fetchTeamLogo, scrollToTop, getTeamByTeam } from '../utility';

class VideoList extends Component {

  componentDidMount(){
    if (window.location.search && window.location.search.includes('?t=')){
      let name = window.location.search.slice(3),
          team = getTeamByTeam(name);
      this.props.selectTeam(team);
      this.props.fetchVideos({selectedTeam: team});
    } else if (window.location.search && window.location.search.includes('?d=')){
      let gameday = window.location.search.slice(3);
      this.props.selectGameday(gameday);
      this.props.fetchVideos({selectedGameday: gameday});
    } else {
      this.props.fetchVideos();
    }
  }
  renderItem(video) {
    return (
      <div
        className='c_video-list-item col-sm-3'
        key={video.id}
        onClick={() => {
          this.props.selectVideo(video);
          this.props.fetchVideos({selectedVideo: video});
          scrollToTop();
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
          <div className="truncate">{video.team_1} vs {video.team_2}</div>
          <div>{video.game_day}</div>

        </div>
      </div>
    );
  }
  renderList(videos) {
    if (videos && videos.length > 0) {
      return videos.map((video) => {
        return this.renderItem(video);
      });
    } else {
      return (<div className="col-sm-12">Sorry, no video found!</div>);
    }

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
        <div>
          <div className="applied-item" onClick = {()=>{
              this.props.selectTeam();
              this.props.fetchVideos({selectedGameday: this.props.selectedGameday, selectedTeam: null});
            }}>{this.props.selectedTeam.name}</div>
          <div className="btn btn-primary" onClick={() => {
              this.props.showShareLink(true);
            }}>Share</div>
        </div>
      );
    } else if (this.props.selectedGameday) {
      return (
        <div>
          <div className="applied-item" onClick = {()=>{
              this.props.selectGameday();
              this.props.fetchVideos({selectedGameday: null, selectedTeam: this.props.selectedTeam});
            }}>{this.props.selectedGameday}</div>
          <div className="btn btn-primary" onClick={() => {
              this.props.showShareLink(true);
            }}>Share</div>
        </div>
      );
    } else {
      return '';
    }
  }


  renderRecommend(name, videos) {
    if (videos && videos.length > 0) {
      return (
        <div className="recommended-list">
          <h4>Other games from {name}</h4>
          <div className="row">
            {this.renderList(videos.filter( video => {
              return video.youtube_id !== this.props.selectedVideo.youtube_id
            }))}
          </div>
        </div>
      );
    } else {
      return '';
    }

  }

  render() {
    if (this.props.videos){
      // General video list
      if(Array.isArray(this.props.videos)) {
        return (
          <div className="c_video-list">
            <div className="container">
              <div className="clearfix">
                <h2 className="comp-title">{this.renderTitle()}</h2>
                <div className="applied-filter">
                  {this.renderApplied()}
                </div>
              </div>
              <div className="row">
                {this.renderList(this.props.videos)}
              </div>
            </div>
          </div>
        );
      } else if (this.props.selectedVideo) {
        // Recommended Section
        return (
          <div className="c_video-list">
            <div className="container">
              {this.renderRecommend(this.props.videos.team_1_name ,this.props.videos.team_1_videos)}
              {this.renderRecommend(this.props.videos.team_2_name ,this.props.videos.team_2_videos)}
              {this.renderRecommend(this.props.videos.game_day_name ,this.props.videos.game_day_videos)}
            </div>
          </div>
        );
      } else {
        return '';
      }
    } else {
      return (
        <div className="text-center">
          Loading
        </div>
      );
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
  return bindActionCreators( {selectVideo, fetchVideos, selectTeam, selectGameday, showShareLink}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
