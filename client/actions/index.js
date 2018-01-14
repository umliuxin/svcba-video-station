import { SELECT_VIDEO_ACTION } from '../constants/actions';

export function selectVideo(video){
  return {
    type: SELECT_VIDEO_ACTION,
    payload: video
  }
}
