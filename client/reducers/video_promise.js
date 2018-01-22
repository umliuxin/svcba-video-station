import { FETCH_VIDEO_ACTION } from '../constants/actions';
import _ from 'lodash';

export default function(thisState = {}, action){
  if (action.type === FETCH_VIDEO_ACTION){
    let obj = {};
    obj[action.payload.config.url] = action.payload
    let newState = Object.assign(thisState, obj);
    return newState;
  }
  return thisState;
}
