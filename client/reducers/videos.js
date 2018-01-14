import { FETCH_VIDEO_ACTION } from '../constants/actions';

export default function(thisState = null, action){
  if (action.type === FETCH_VIDEO_ACTION){
    console.log(action);
    return action.payload.data;
  }
  return thisState;
}
