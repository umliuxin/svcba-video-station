import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTeam, fetchVideos } from '../actions';
import { bindActionCreators } from 'redux';

import { GROUP_MEN, GROUP_WOMEN } from '../constants/constants';

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
            this.props.selectTeam();
            this.props.fetchVideos();
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
            this.props.selectTeam(team);
            this.props.fetchVideos();
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
        return !this.props.selectedTeam || this.props.teams[key].id !== this.props.selectedTeam.id

      })
      .filter(key => {
        if (group == "all") return true;
        return this.props.teams[key].group === group;
      })
      .map(key => {
      let team = this.props.teams[key];
      return this.renderListItem(team, false);
    });
  }
  renderSelected(){
    if (!this.props.selectedTeam) return '';
    return (
      <div>
        <h4>SELECTED</h4>
        <div>
          {this.renderListItem(this.props.selectedTeam, true)}
        </div>
      </div>
    );
  }

  render(){
    return (
      <div className='c_team-list'>
        <div className='container'>
          <h2 className="comp-title">Filter by team</h2>
          {this.renderSelected()}
          <h4> MEN Group</h4>
          <div className="row">
            {this.renderList(GROUP_MEN)}
          </div>
          <h4>Women Group</h4>
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
    selectedTeam: state.selectedTeam
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( {selectTeam, fetchVideos}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamList);
