import { SELECT_TEAM_ACTION } from '../constants/actions';

export default function(thisState = null, action){
  if (action.type === SELECT_TEAM_ACTION){
    return action.payload;
  }
  return thisState;
}
