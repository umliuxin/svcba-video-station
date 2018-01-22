import { SELECT_VIDEO_ACTION, SELECT_TEAM_ACTION, SELECT_GAMEDAY_ACTION, FETCH_VIDEO_ACTION } from '../constants/actions';

import { API_URL } from '../constants/constants';

import axios from 'axios';

import { store } from '../store';

export function selectVideo(video){
  return {
    type: SELECT_VIDEO_ACTION,
    payload: video
  }
}

export function selectTeam(team){
  return {
    type: SELECT_TEAM_ACTION,
    payload: team
  }
}

export function selectGameday(gameday){
  return {
    type: SELECT_GAMEDAY_ACTION,
    payload: gameday
  }
}

export function fetchVideos(){
  const state = store.getState()
  let requestUrl = API_URL;
  if (state.selectedGameday){
    requestUrl = `${requestUrl}&game_day=${state.selectedGameday}`;
  }
  if (state.selectedTeam){
    requestUrl = `${requestUrl}&team=${state.selectedTeam.name}`;
  }
  if (requestUrl == API_URL){
    requestUrl = `${requestUrl}&limit=15`;
  }
  var request;
  if (state['videoPromises'][requestUrl]){
    request = state['videoPromises'][requestUrl];
  } else {
    request = axios.get(requestUrl);
  }
  return {
    type: FETCH_VIDEO_ACTION,
    payload: request
  }
}
