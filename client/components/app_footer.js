import React, { Component } from 'react';

const LSJ_URL = "http://www.lsjball.club/";
const SVCBA_URL = "http://svcba.openball.com/";

export default class AppFooter extends Component {
  render(){
    return(
      <footer className="c_app-footer">
       <div className="container text-center">
         <a href={SVCBA_URL}>SVCBA</a>
         <a href="/">Video Station</a>
         <a href={LSJ_URL}>LSJ</a>
         <br/>© 2014-2018 Xin Liu, All rights reserved
       </div>
      </footer>
    );
  }
}
