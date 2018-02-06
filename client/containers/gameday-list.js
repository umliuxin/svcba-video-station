import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectGameday, fetchVideos } from '../actions';
import { bindActionCreators } from 'redux';

class GamedayList extends Component {

  renderListItem(gameday, isActive) {
    if (isActive){
      return (
        <div className="c_gameday-item active" key={gameday}>
          <button
            className="btn"
            onClick= {()=> {
              this.props.selectGameday();
              this.props.fetchVideos();
            }}>
              {gameday}
          </button>
        </div>
      );
    } else {
      return (
        <div className="c_gameday-item" key={gameday}>
          <button
            className="btn"
            onClick= {()=> {
              this.props.selectGameday(gameday);
              this.props.fetchVideos();
            }}>
              {gameday}
          </button>
        </div>
      );
    }
  }

  renderList() {
    if (!this.props.gamedays){ return; }
    return this.props.gamedays
      .filter(gameday => {
        return this.props.selectedGameday !== gameday;
      })
      .map((gameday) => {
        return this.renderListItem(gameday, false);
      });
  }

  renderSelected() {
    if (!this.props.selectedGameday) return '';
    return (
      <div className="selected-row">
        <h4>SELECTED</h4>
        <div>
          {this.renderListItem(this.props.selectedGameday, true)}
        </div>
      </div>
    );
  }

  render() {
    return(
      <div className="c_gameday-list">
        <div className='container'>
          <h2 className="comp-title">Filter by game day</h2>
          {this.renderSelected()}
          {this.renderList()}
        </div>
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
