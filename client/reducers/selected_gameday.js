import { SELECT_GAMEDAY_ACTION } from '../constants/actions';

export default function(thisState = null, action){
  if (action.type === SELECT_GAMEDAY_ACTION){
    return action.payload;
  }
  return thisState;
}
