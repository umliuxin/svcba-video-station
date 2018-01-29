import { SHOW_SHARE_ACTION } from '../constants/actions';

export default function(thisState = null, action){
  if (action.type === SHOW_SHARE_ACTION){
    return action.payload;
  }
  return thisState;
}
