import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTeam } from '../actions';
import { bindActionCreators } from 'redux';

class TeamList extends Component {
  renderList(){
    return this.props.teams.map((team) => {
      let activeClass;
      if (this.props.selectedTeam && team.id === this.props.selectedTeam.id){
        return (
          <li
            className="team-list-item active"
            key={team.id}
            onClick={() => this.props.selectTeam(team)}>
            Name: {team.name}, Image: {team.image}
          </li>
        );
      } else{
        return (
          <li
            className="team-list-item"
            key={team.id}
            onClick={() => this.props.selectTeam(team)}>
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
  return bindActionCreators( {selectTeam}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamList);
