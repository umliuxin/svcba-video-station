import React, { Component } from 'react';

import appLogo from '../images/app-logo.png';


export default class AppHeader extends Component {
  render(){
    return(
      <nav className="c_app-header navbar">
       <div className="container">
         <a href={window.location.origin}><img src={appLogo} className="img-app-logo"/></a>
         <span className="app-title">SVCBA Video Station</span>
       </div>
      </nav>
    );
  }
}
