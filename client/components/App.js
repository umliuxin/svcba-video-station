import React, { Component } from 'react';

import AppHeader from './app_header';
import AppFooter from './app_footer';
import VideoDetail from './video_detail';

export default class App extends Component {
  render(){
    return(
      <div id="app-root">
        <AppHeader />
        <VideoDetail />
        <AppFooter />
      </div>
    );
  }
}
