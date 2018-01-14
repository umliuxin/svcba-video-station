import React, { Component } from 'react';

import AppHeader from './app_header';
import AppFooter from './app_footer';
import VideoDetail from './video_detail';

import VideoList from '../containers/video-list';
import SelectedVideo from '../containers/selected-video';

export default class App extends Component {
  render(){
    return(
      <div id="app-root">
        <AppHeader />
        <VideoDetail />
        <SelectedVideo />
        <VideoList />
        <AppFooter />
      </div>
    );
  }
}
