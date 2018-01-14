import { combineReducers } from 'redux';
import VideosReducer from './videos';
import SelectedVideoReducer from './selected_video';

const rootReducer = combineReducers({
  videos: VideosReducer,
  selectedVideo: SelectedVideoReducer
});

export default rootReducer;
