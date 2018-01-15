import React, {Component} from 'react';


class GamedayList extends Component {

  renderList() {
    
    <div
      className="btn btn-primary"
      key={gameday.id}
      >
      Game Day: 1
    </div>
  }

  render() {
    return(
      <div className="gameday-list">
        {this.renderList()}
      </div>
    );
  }
}
