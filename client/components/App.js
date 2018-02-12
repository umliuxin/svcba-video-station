import React, { Component } from 'react';

import AppHeader from './app_header';
import AppFooter from './app_footer';
import ShareLink from '../containers/share-link';
import VideoList from '../containers/video-list';
import Filter from '../containers/filters';
import SelectedVideo from '../containers/selected-video';

export default class App extends Component {
  render(){
    return(
      <div id="app-root">
        <AppHeader />
        <SelectedVideo />
        <VideoList />
        <Filter />
        <AppFooter />
        <ShareLink />
      </div>
    );
  }
}
