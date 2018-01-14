import { SELECT_VIDEO_ACTION, SELECT_TEAM_ACTION } from '../constants/actions';

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
