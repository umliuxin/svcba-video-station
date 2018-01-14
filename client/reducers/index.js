import { combineReducers } from 'redux';
import VideosReducer from './videos';
import TeamsReducer from './teams';
import SelectedVideoReducer from './selected_video';
import SelectedTeamReducer from './selected_team';

const rootReducer = combineReducers({
  videos: VideosReducer,
  selectedVideo: SelectedVideoReducer,
  teams: TeamsReducer,
  selectedTeam: SelectedTeamReducer
});

export default rootReducer;
