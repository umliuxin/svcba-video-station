import { SELECT_VIDEO_ACTION, SELECT_TEAM_ACTION, FETCH_VIDEO_ACTION } from '../constants/actions';

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

export function fetchVideos(team = null){
  let requestUrl = API_URL;

  if (team){
    requestUrl = `${requestUrl}?team=${team.name}`
  }
  const request = axios.get(requestUrl);
  console.log('request', request);
  return {
    type: FETCH_VIDEO_ACTION,
    payload: request
  }
}
