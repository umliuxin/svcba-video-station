import { SELECT_VIDEO_ACTION } from '../constants/actions';

export default function(thisState = null, action){
  if (action.type === SELECT_VIDEO_ACTION){
    return action.payload;
  }
  return thisState;
}
