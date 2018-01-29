import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVideo, showShareLink } from '../actions';
import { YOUTUBE_BASE_URL } from '../constants/constants';

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
          <div><button className="btn btn-primary" onClick={this.shareOnClick}>Share</button></div>
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
