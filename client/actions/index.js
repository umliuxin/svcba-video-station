import { SELECT_VIDEO_ACTION, SELECT_TEAM_ACTION, SELECT_GAMEDAY_ACTION, FETCH_VIDEO_ACTION } from '../constants/actions';

import { API_URL } from '../constants/constants';

import axios from 'axios';

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
  let requestUrl = API_URL;
  
  const request = axios.get(requestUrl);
  return {
    type: FETCH_VIDEO_ACTION,
    payload: request
  }
}

export function fetchVideosByGameday(gameday = null){
  let requestUrl = API_URL;

  if (gameday){
    requestUrl = `${requestUrl}?game_day=${gameday}`
  }
  const request = axios.get(requestUrl);
  return {
    type: FETCH_VIDEO_ACTION,
    payload: request
  }
}

export function fetchVideosByTeam(team = null){
  let requestUrl = API_URL;

  if (team){
    requestUrl = `${requestUrl}?team=${team.name}`
  }
  const request = axios.get(requestUrl);
  return {
    type: FETCH_VIDEO_ACTION,
    payload: request
  }
}
