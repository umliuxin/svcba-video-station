import { SELECT_VIDEO_ACTION, FETCH_VIDEO_ACTION, SELECT_TEAM_ACTION, SELECT_GAMEDAY_ACTION } from '../constants/actions';

export default function(thisState = null, action){
  if (action.type === SELECT_VIDEO_ACTION){
    return action.payload;
  } else if (action.type == FETCH_VIDEO_ACTION){
    return action.payload.data.data[0];
  } else if (action.type == SELECT_TEAM_ACTION || action.type == SELECT_GAMEDAY_ACTION) {
    return null;
  }
  return thisState;
}
