import React, { Component } from 'react';

import AppHeader from './app_header';
import AppFooter from './app_footer';
// import VideoDetail from './video_detail';

import TeamList from '../containers/team-list';
import ShareLink from '../containers/share-link';
import VideoList from '../containers/video-list';
import GamedayList from '../containers/gameday-list';
import SelectedVideo from '../containers/selected-video';

export default class App extends Component {
  render(){
    return(
      <div id="app-root">
        <AppHeader />
        <SelectedVideo />
        <ShareLink />
        <VideoList />
        <TeamList />
        <GamedayList />
        <AppFooter />
      </div>
    );
  }
}
