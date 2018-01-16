import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectGameday, fetchVideos } from '../actions';
import { bindActionCreators } from 'redux';

class GamedayList extends Component {

  renderList() {
    if (!this.props.gamedays){
      return;
    }
    return this.props.gamedays.map((gameday) => {
      if (this.props.selectedGameday && gameday === this.props.selectedGameday){
        return (
          <div
            className="btn btn-primary active"
            key={gameday}
            onClick= {()=> {
              this.props.selectGameday();
              this.props.fetchVideos();
            }}
            >
            Game Day: {gameday}
          </div>
        );
      } else {
        return (
          <div
            className="btn btn-primary"
            key={gameday}
            onClick= {()=> {
              this.props.selectGameday(gameday);
              this.props.fetchVideos();
            }}
            >
            Game Day: {gameday}
          </div>
        );
      }

    });

  }

  render() {
    return(
      <div className="gameday-list">
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    gamedays: state.gamedays,
    selectedGameday: state.selectedGameday
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectGameday, fetchVideos}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GamedayList)
