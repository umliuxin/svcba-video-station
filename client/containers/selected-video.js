import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVideo, showShareLink } from '../actions';
import { YOUTUBE_BASE_URL } from '../constants/constants';

import { fetchTeamLogo } from '../utility';

class SelectedVideo extends Component {
  constructor(props){
    super(props);
    this.shareOnClick = this.shareOnClick.bind(this);
  }
  componentWillUpdate(){
    this.props.showShareLink(false);
  }
  componentDidMount(){
    if (window.location.search && window.location.search.includes('?v=')){
      let vid = window.location.search.slice(3);
      this.props.fetchVideo(vid);
    }
  }
  render(){
    if (!this.props.video){
      return '';
    }
    console.log(this.props.video)
    return (
      <div className="c_video-detail">
        <div className="container">
          <div className="video-meta">
            <div className="team-1-logo">
              <div className="team-name">
                {this.props.video.team_1}
              </div>
              <img src={fetchTeamLogo(this.props.video.team_1)}/>
            </div>
            <div className="team-2-logo">
              <div className="team-name">
                {this.props.video.team_2}
              </div>
              <img src={fetchTeamLogo(this.props.video.team_2)}/>
            </div>
            <div className="video-date">{this.props.video.gametime}</div>
            <div className="share-button"><button className="btn btn-primary" onClick={this.shareOnClick}>Share</button></div>
          </div>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={`${YOUTUBE_BASE_URL}${this.props.video.youtube_id}`}></iframe>
          </div>
        </div>
      </div>
    );
  }

  shareOnClick(){
    this.props.showShareLink(true);
  }

}

function mapStateToProps(state) {
  return {
    video: state.selectedVideo
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchVideo, showShareLink}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedVideo)
