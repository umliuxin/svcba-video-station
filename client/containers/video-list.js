import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectVideo, fetchVideos, selectTeam, selectGameday } from '../actions';
import { bindActionCreators } from 'redux';

import { fetchTeamLogo } from '../utility';

class VideoList extends Component {

  componentDidMount(){
    this.props.fetchVideos();
  }
  renderList() {
    if (!this.props.videos){
      return <div>Loading</div>;
    }
    return this.props.videos.map((video) => {
      return (
        <div
          className='c_video-list-item col-sm-6'
          key={video.id}
          onClick={() => this.props.selectVideo(video)}>
          <div className="item-wrap">
            <div>{video.team_1} vs {video.team_2}</div>
            <div>{video.game_day}</div>
            <div className="team-1-logo">
              <img src={fetchTeamLogo(video.team_1)}/>
            </div>
            <div className="team-2-logo">
              <img src={fetchTeamLogo(video.team_2)}/>
            </div>
          </div>
        </div>
      );
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
          <div className="applied-item" onClick = {() => {this.props.selectTeam()}}>{this.props.selectedTeam.name}</div>
          <div className="applied-item" onClick = {() => {this.props.selectGameday()}}>{this.props.selectedGameday}</div>
        </div>
      );
    } else if (this.props.selectedTeam) {
      return (
        <div className="applied-item" onClick = {() => {this.props.selectTeam()}}>{this.props.selectedTeam.name}</div>
      );
    } else if (this.props.selectedGameday) {
      return (
        <div className="applied-item" onClick = {() => {this.props.selectGameday()}}>{this.props.selectedGameday}</div>
      );
    } else {
      return '';
    }
  }

  render() {
    return (
      <div className="c_video-list">
        <div className="container">
          <h2 className="comp-title">{this.renderTitle()}</h2>
          <div className="applied-filter">
            {this.renderApplied()}
          </div>
          <div className="row">
            {this.renderList()}
          </div>
        </div>
      </div>
    )
  }

}


function mapStateToProps(state) {
  return {
    videos: state.videos,
    selectedTeam: state.selectedTeam,
    selectedGameday: state.selectedGameday
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( {selectVideo, fetchVideos, selectTeam, selectGameday}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
