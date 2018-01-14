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
          <li
            className="team-list-item active"
            key={team.id}
            onClick={() => this.onItemClick()}>
            Name: {team.name}, Image: {team.image}
          </li>
        );
      } else {
        return (
          <li
            className="team-list-item"
            key={team.id}
            onClick={() => this.onItemClick(team)}>
            Name: {team.name}, Image: {team.image}
          </li>
        );
      }
    });
  }

  render(){
    return (
      <ul className='team-list list-group'>
        {this.renderList()}
      </ul>
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
