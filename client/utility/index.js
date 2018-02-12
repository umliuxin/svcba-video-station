import defaultLogo from '../images/default-logo.png';
import { TEAM_LIST } from '../constants/teams';

export function fetchTeamLogo(team) {
  if ( team in TEAM_LIST){
    return TEAM_LIST[team].image;
  } else {
    return defaultLogo;
  }
}


export function scrollToTop() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}
