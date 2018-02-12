import { SELECT_TEAM_ACTION, SELECT_VIDEO_ACTION } from '../constants/actions';

export default function(thisState = null, action){
  if (action.type === SELECT_TEAM_ACTION){
    if (action.payload){
      return action.payload;
    } else {
      return null;
    }
  } else if (action.type === SELECT_VIDEO_ACTION) {
    return null
  }
  return thisState;
}
