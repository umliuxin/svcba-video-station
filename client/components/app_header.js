import React, { Component } from 'react';

import appLogo from '../images/app-logo.png';


export default class AppHeader extends Component {
  render(){
    return(
      <nav className="c_app-header navbar">
       <div className="container">
         <img src={appLogo} className="img-app-logo"/>
         <span className="app-title">SVCBA Video Station</span>
       </div>
      </nav>
    );
  }
}
