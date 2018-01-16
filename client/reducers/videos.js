import { FETCH_VIDEO_ACTION } from '../constants/actions';

export default function(thisState = null, action){
  if (action.type === FETCH_VIDEO_ACTION){
    if (action.payload.data){
      return action.payload.data;
    } else {
      return null;
    }
  }
  return thisState;
}
