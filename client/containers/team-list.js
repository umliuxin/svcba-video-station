import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTeam, fetchVideos } from '../actions';
import { bindActionCreators } from 'redux';

import { GROUP_MEN, GROUP_WOMEN } from '../constants/constants';
import { scrollToTop } from '../utility';


class TeamList extends Component {
  constructor(props){
    super(props);
    this.onItemClick = this.onItemClick.bind(this);
  }
  onItemClick(team = null){
    this.props.selectTeam(team);
  }
  renderListItem(team, isActive){
    if (isActive){
      return (
        <div
          className="c_team-list-item col-sm-2 active"
          key={team.id}
          onClick={() => {
            scrollToTop();
            this.props.selectTeam();
            this.props.fetchVideos({selectedGameday: this.props.selectedGameday, selectedTeam: this.props.selectedTeam, selectedVideo: this.props.selectVideo});
          }}>
          <div className="wrap">
            <img src={team.image}/>
            <div className="text-wrap"><div>{team.name}</div></div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="c_team-list-item col-sm-2"
          key={team.id}
          onClick={() => {
            scrollToTop();
            this.props.selectTeam(team);
            this.props.fetchVideos({selectedGameday: this.props.selectedGameday, selectedTeam: team, selectedVideo: this.props.selectVideo});
          }}>
          <div className="wrap">
            <img src={team.image}/>
            <div className="text-wrap"><div>{team.name}</div></div>
          </div>
        </div>
      );
    }
  }

  renderList(group = 'all'){
    return Object.keys(this.props.teams)
      .filter(key => {
        if (group == "all") return true;
        return this.props.teams[key].group === group;
      })
      .map(key => {
      let team = this.props.teams[key];
      return this.renderListItem(team, this.props.selectedTeam && team.id === this.props.selectedTeam.id);
    });
  }

  render(){
    return (
      <div className='c_team-list'>
        <div className='container'>
          <h2 className="comp-title">Teams</h2>
          <div className="row">
            {this.renderList(GROUP_MEN)}
          </div>
          <h4>Women SVCBA</h4>
          <div className="row">
            {this.renderList(GROUP_WOMEN)}
          </div>

        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    teams: state.teams,
    selectedGameday: state.selectedGameday,
    selectedTeam: state.selectedTeam,
    selectedVideo: state.selectedVideo
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( {selectTeam, fetchVideos}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamList);
