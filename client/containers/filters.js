import React, {Component} from 'react';
import { connect } from 'react-redux';


import TeamList from '../containers/team-list';
import GamedayList from '../containers/gameday-list';

class Filter extends Component {
  render() {
    if (!this.props.selectedGameday && this.props.selectedTeam){
      return (
        <div className="filters">
          <GamedayList />
          <TeamList />
        </div>
      )
    } else {
      return (
        <div className="filters">
          <TeamList />
          <GamedayList />
        </div>
      )
    }
  }
}

function mapStateToProps(state){
  return {
    selectedGameday: state.selectedGameday,
    selectedTeam: state.selectedTeam
  };
}

export default connect(mapStateToProps)(Filter)
