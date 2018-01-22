import { FETCH_VIDEOS_ACTION } from '../constants/actions';


export default function(thisState = null, action){
  if (action.type === FETCH_VIDEOS_ACTION && thisState == null){
    if (action.payload.data){
      return action.payload.data.gamedays;
    } else {
      return null;
    }
  }
  return thisState;
}
