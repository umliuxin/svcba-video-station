import { FETCH_VIDEOS_ACTION } from '../constants/actions';

export default function(thisState = null, action){
  if (action.type === FETCH_VIDEOS_ACTION){
    if (action.payload.data.data){
      return action.payload.data.data;
    } else {
      return null;
    }
  }
  return thisState;
}
