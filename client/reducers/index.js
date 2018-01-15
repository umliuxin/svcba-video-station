import { combineReducers } from 'redux';
import VideosReducer from './videos';
import TeamsReducer from './teams';
import GamedaysReducer from './gamedays';
import SelectedVideoReducer from './selected_video';
import SelectedTeamReducer from './selected_team';
import SelectedGamedayReducer from './selected_gameday';

const rootReducer = combineReducers({
  videos: VideosReducer,
  selectedVideo: SelectedVideoReducer,
  teams: TeamsReducer,
  selectedTeam: SelectedTeamReducer,
  gamedays: GamedaysReducer,
  selectedGameday: SelectedGamedayReducer
});

export default rootReducer;
