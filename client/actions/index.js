import {
  SELECT_VIDEO_ACTION,
  SELECT_TEAM_ACTION,
  SELECT_GAMEDAY_ACTION,
  FETCH_VIDEOS_ACTION,
  FETCH_VIDEO_ACTION,
  SHOW_SHARE_ACTION } from '../constants/actions';

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

export function fetchVideo(vid){
  let requestUrl = `${API_URL}&vid=${vid}`;
  let request = axios.get(requestUrl);
  return {
    type: FETCH_VIDEO_ACTION,
    payload: request
  }
}

export function fetchVideos({selectedGameday, selectedTeam, selectedVideo, indexVideos} = {}){
  const state = store.getState();
  let requestUrl = API_URL;
  if (selectedVideo) {
    requestUrl = `${requestUrl}&recommend=true&team_1=${selectedVideo.team_1}&team_2=${selectedVideo.team_2}&game_day=${selectedVideo.game_day}&limit=6`;
  } else {
    if (selectedGameday){
      requestUrl = `${requestUrl}&game_day=${selectedGameday}`;
    }
    if (selectedTeam){
      requestUrl = `${requestUrl}&team=${selectedTeam.name}`;
    }
  }

  if (requestUrl === API_URL) {
    requestUrl = `${requestUrl}&limit=12`
  }

  var request;
  if (state['videoPromises'][requestUrl]){
    request = state['videoPromises'][requestUrl];
  } else {
    request = axios.get(requestUrl);
  }
  return {
    type: FETCH_VIDEOS_ACTION,
    payload: request
  }
}

export function showShareLink(bool){
  return {
    type: SHOW_SHARE_ACTION,
    payload: bool
  }
}
