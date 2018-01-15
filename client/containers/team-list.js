import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTeam, fetchVideos } from '../actions';
import { bindActionCreators } from 'redux';

class TeamList extends Component {
  constructor(props){
    super(props);
    this.onItemClick = this.onItemClick.bind(this);
  }
  onItemClick(team = null){
    this.props.selectTeam(team);
    this.props.fetchVideos(team);
  }
  renderList(){
    return this.props.teams.map((team) => {
      if (this.props.selectedTeam && team.id === this.props.selectedTeam.id){
        return (
          <div
            className="team-list-item btn btn-primary active"
            key={team.id}
            onClick={() => this.onItemClick()}>
              Active: {team.name}
          </div>
        );
      } else {
        return (
          <div
            className="team-list-item btn btn-primary"
            key={team.id}
            onClick={() => this.onItemClick(team)}>
             {team.name}
          </div>
        );
      }
    });
  }

  render(){
    return (
      <div className='team-list'>
        {this.renderList()}
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
