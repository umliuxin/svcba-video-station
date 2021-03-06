import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectGameday, fetchVideos } from '../actions';
import { bindActionCreators } from 'redux';
import { scrollToTop } from '../utility';


class GamedayList extends Component {
  renderListItem(gameday, isActive) {
    if (isActive){
      return (
        <div className="c_gameday-item active" key={gameday} onClick= {()=> {
          scrollToTop();
          this.props.selectGameday();
          this.props.fetchVideos({selectedGameday: this.props.selectedGameday, selectedTeam: this.props.selectedTeam, selectedVideo: this.props.selectVideo});
        }}>
          <button className="btn">
              <strong>{gameday}</strong>
          </button>
        </div>
      );
    } else {
      return (
        <div className="c_gameday-item" key={gameday} onClick= {()=> {
          scrollToTop();
          this.props.selectGameday(gameday);
          this.props.fetchVideos({selectedGameday: gameday, selectedTeam: this.props.selectedTeam, selectedVideo: this.props.selectVideo});
        }}>
          <button className="btn">
              {gameday}
          </button>
        </div>
      );
    }
  }

  renderList() {
    if (!this.props.gamedays){ return; }
    return this.props.gamedays
      .sort().reverse()
      .map((gameday) => {
        return this.renderListItem(gameday, this.props.selectedGameday === gameday);
      });
  }

  render() {
    return(
      <div className="c_gameday-list">
        <div className='container'>
          <h2 className="comp-title">Gamedays</h2>
          <div className="gameday-wrap">
            {this.renderList()}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    gamedays: state.gamedays,
    selectedGameday: state.selectedGameday,
    selectedTeam: state.selectedTeam,
    selectedVideo: state.selectedVideo
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectGameday, fetchVideos}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GamedayList)
